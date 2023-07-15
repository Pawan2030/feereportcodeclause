window.addEventListener('DOMContentLoaded', () => {
    const reportTable = document.getElementById('reportTable');
    const body = document.querySelector('body');
  
    // Set background image
    body.style.backgroundImage = "url('background.jpg')"; // Replace 'background.jpg' with your image path
  
    // Sample data - replace with your actual data
    const feeReport = [
      { name: 'Pawan Mehta', hoursWorked: 40, hourlyRate: 50 },
      { name: 'Jane Smith', hoursWorked: 35, hourlyRate: 45 },
      { name: 'Bob Johnson', hoursWorked: 20, hourlyRate: 55 }
    ];
  
    // Generate the table rows dynamically
    feeReport.forEach(entry => {
      const { name, hoursWorked, hourlyRate } = entry;
      const totalFee = hoursWorked * hourlyRate;
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${name}</td>
        <td>${hoursWorked}</td>
        <td>${hourlyRate}</td>
        <td>${totalFee}</td>
      `;
  
      reportTable.appendChild(row);
    });
  });
  
