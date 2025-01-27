const API_BASE_URL = 'http://localhost:8091/api/tickets';
const TRAIN_SERVICE_URL = 'http://localhost:8090/api/trains';

/**
 * Utility function to handle API errors.
 * @param {Response} response - The response object from the fetch call.
 */
async function handleApiError(response) {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || 'An error occurred while processing the request.');
  }
}

/**
 * Fetch all available trains from the Train Service.
 * @returns {Promise<Array>} - A list of train objects.
 */
async function fetchAvailableTrains() {
  try {
    const response = await fetch(`${TRAIN_SERVICE_URL}`);
    await handleApiError(response);
    const trains = await response.json();
    console.log('Trains fetched successfully:', trains);
    return trains;
  } catch (error) {
    console.error('Error fetching trains:', error.message);
    throw error;
  }
}

/**
 * Populate the train dropdown with available train IDs.
 * @param {Array} trains - The list of trains fetched from the Train Service.
 */
function populateTrainDropdown(trains) {
  const trainDropdown = document.getElementById('trainId');
  trainDropdown.innerHTML = ''; // Clear any existing options

  // Create a default "Select" option
  const defaultOption = document.createElement('option');
  defaultOption.text = 'Select a Train ID';
  trainDropdown.appendChild(defaultOption);

  // Add each train ID to the dropdown
  trains.forEach((train) => {
    const option = document.createElement('option');
    option.value = train.id; // Assuming `id` is the field for the train ID
    option.text = `Train ${train.trainNumber} (${train.route})`; // Displaying the train number and route
    trainDropdown.appendChild(option);
  });
}

/**
 * Book a new ticket.
 * @param {Object} ticketData - The data for the ticket to book.
 * @returns {Promise<Object>} - The booked ticket details.
 */
async function bookTicket(ticketData) {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticketData),
    });
    await handleApiError(response);
    const bookedTicket = await response.json();
    console.log('Ticket booked successfully:', bookedTicket);
    return bookedTicket;
  } catch (error) {
    console.error('Error booking ticket:', error.message);
    throw error;
  }
}

/**
 * Cancel a ticket by ID.
 * @param {number} ticketId - The ID of the ticket to cancel.
 */
async function cancelTicket(ticketId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${ticketId}`, {
      method: 'DELETE',
    });
    await handleApiError(response);
    console.log(`Ticket with ID ${ticketId} canceled successfully.`);
  } catch (error) {
    console.error('Error canceling ticket:', error.message);
    throw error;
  }
}

/**
 * Update ticket details.
 * @param {number} ticketId - The ID of the ticket to update.
 * @param {Object} ticketData - The new data for the ticket.
 */
async function updateTicket(ticketId, ticketData) {
    try {
      const response = await fetch(`${API_BASE_URL}/${ticketId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ticketData),
      });
      
      // Handle errors
      await handleApiError(response);
  
      console.log(`Ticket with ID ${ticketId} updated successfully.`);
      return response.json(); // Return the updated ticket details
    } catch (error) {
      console.error('Error updating ticket:', error.message);
      throw error;
    }
  }
  
  // Form submission event handler
  document.getElementById('update-ticket-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const ticketId = document.getElementById('ticketId').value;
    const passengerName = document.getElementById('passengerName').value;
    const travelDate = document.getElementById('travelDate').value;
    const statusDiv = document.getElementById('update-status');
  
    // Prepare the ticket data to update
    const ticketData = {
      passengerName,
      travelDate,
    };
  
    try {
      // Call the API to update the ticket
      const updatedTicket = await updateTicket(ticketId, ticketData);
  
      // Display success message
      statusDiv.textContent = `Ticket ID ${updatedTicket.id} has been successfully updated.`;
      statusDiv.style.color = 'green';
    } catch (error) {
      // Display error message
      statusDiv.textContent = `Failed to update ticket: ${error.message}`;
      statusDiv.style.color = 'red';
    }
  });
  
