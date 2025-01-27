// Base URL for the backend API
const API_BASE_URL = 'http://localhost:8091/api/tickets';

// Utility function to display status messages
function showStatusMessage(elementId, message, isSuccess = true) {
  const statusElement = document.getElementById(elementId);
  if (statusElement) {
    statusElement.textContent = message;
    statusElement.style.color = isSuccess ? 'green' : 'red';
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

// Utility function to handle API errors
async function handleApiError(response) {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || 'An error occurred while processing the request.');
  }
}

// Initialize the page (e.g., add event listeners or prefetch data)
function initializePage() {
  console.log('Page initialized.');
  setupNavigation();
}

// Setup navigation for consistent links on all pages
function setupNavigation() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="index.html">Home</a>
    <a href="book-ticket.html">Book Ticket</a>
    <a href="view-tickets.html">View Tickets</a>
    <a href="cancel-ticket.html">Cancel Ticket</a>
    <a href="update-ticket.html">Update Ticket</a>
  `;
  document.body.prepend(nav);
}

// DOM Content Loaded Listener
document.addEventListener('DOMContentLoaded', initializePage);
