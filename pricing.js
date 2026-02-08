// Pricing Calculator JavaScript

// Pricing rates
const rates = {
    endpoint: 2.76,
    networkDevice: 3.79,
    iot: 0.25,
    camera: 0.93,
    phone: 90.00,
    nas: 25.00
};

// Minimum costs
const minimums = {
    network: 50.00,
    camera: 25.00,
    endpoint: 50.00,
    iot: 0
};

function calculateTotal() {
    let monthlyCosts = {
        endpoint: 0,
        network: 0,
        iot: 0,
        camera: 0,
        phone: 0,
        nas: 0
    };

    let totalMonthly = 0;
    let breakdownHTML = '';
    let servicesSelected = 0;

    // Endpoint Protection
    const endpointToggle = document.getElementById('endpointToggle');
    const endpointContent = document.getElementById('endpointContent');
    const endpointDevices = parseInt(document.getElementById('endpointDevices').value) || 0;
    
    if (endpointToggle.checked) {
        endpointContent.style.display = 'block';
        const calculatedEndpoint = endpointDevices * rates.endpoint;
        monthlyCosts.endpoint = Math.max(calculatedEndpoint, minimums.endpoint);
        document.getElementById('endpointMonthly').textContent = `$${monthlyCosts.endpoint.toFixed(2)}`;
        
        breakdownHTML += `
            <div class="breakdown-item">
                <span class="breakdown-label">Endpoint Protection (${endpointDevices} devices)</span>
                <span class="breakdown-amount">$${monthlyCosts.endpoint.toFixed(2)}</span>
            </div>
        `;
        servicesSelected++;
    } else {
        endpointContent.style.display = 'none';
    }

    // Network Management
    const networkToggle = document.getElementById('networkToggle');
    const networkContent = document.getElementById('networkContent');
    const networkDevices = parseInt(document.getElementById('networkDevices').value) || 0;
    
    if (networkToggle.checked) {
        networkContent.style.display = 'block';
        const calculatedNetwork = networkDevices * rates.networkDevice;
        monthlyCosts.network = Math.max(calculatedNetwork, minimums.network);
        document.getElementById('networkMonthly').textContent = `$${monthlyCosts.network.toFixed(2)}`;
        
        breakdownHTML += `
            <div class="breakdown-item">
                <span class="breakdown-label">Network Management (${networkDevices} devices)</span>
                <span class="breakdown-amount">$${monthlyCosts.network.toFixed(2)}</span>
            </div>
        `;
        servicesSelected++;
    } else {
        networkContent.style.display = 'none';
    }

    // IoT Device Management
    const iotToggle = document.getElementById('iotToggle');
    const iotContent = document.getElementById('iotContent');
    const iotDevices = parseInt(document.getElementById('iotDevices').value) || 0;
    
    if (iotToggle.checked) {
        iotContent.style.display = 'block';
        monthlyCosts.iot = iotDevices * rates.iot;
        document.getElementById('iotMonthly').textContent = `$${monthlyCosts.iot.toFixed(2)}`;
        
        if (monthlyCosts.iot > 0) {
            breakdownHTML += `
                <div class="breakdown-item">
                    <span class="breakdown-label">IoT Management (${iotDevices} devices)</span>
                    <span class="breakdown-amount">$${monthlyCosts.iot.toFixed(2)}</span>
                </div>
            `;
            servicesSelected++;
        }
    } else {
        iotContent.style.display = 'none';
    }

    // Camera System
    const cameraToggle = document.getElementById('cameraToggle');
    const cameraContent = document.getElementById('cameraContent');
    const cameraDevices = parseInt(document.getElementById('cameraDevices').value) || 0;
    
    if (cameraToggle.checked) {
        cameraContent.style.display = 'block';
        const calculatedCamera = cameraDevices * rates.camera;
        monthlyCosts.camera = Math.max(calculatedCamera, minimums.camera);
        document.getElementById('cameraMonthly').textContent = `$${monthlyCosts.camera.toFixed(2)}`;
        
        breakdownHTML += `
            <div class="breakdown-item">
                <span class="breakdown-label">Camera System (${cameraDevices} cameras)</span>
                <span class="breakdown-amount">$${monthlyCosts.camera.toFixed(2)}</span>
            </div>
        `;
        servicesSelected++;
    } else {
        cameraContent.style.display = 'none';
    }

    // Phone System
    const phoneToggle = document.getElementById('phoneToggle');
    const phoneContent = document.getElementById('phoneContent');
    
    if (phoneToggle.checked) {
        phoneContent.style.display = 'block';
        monthlyCosts.phone = rates.phone;
        document.getElementById('phoneMonthly').textContent = `$${monthlyCosts.phone.toFixed(2)}`;
        
        breakdownHTML += `
            <div class="breakdown-item">
                <span class="breakdown-label">Phone System Management</span>
                <span class="breakdown-amount">$${monthlyCosts.phone.toFixed(2)}</span>
            </div>
        `;
        servicesSelected++;
    } else {
        phoneContent.style.display = 'none';
    }

    // NAS Management
    const nasToggle = document.getElementById('nasToggle');
    const nasContent = document.getElementById('nasContent');
    const nasDevices = parseInt(document.getElementById('nasDevices').value) || 0;
    
    if (nasToggle.checked) {
        nasContent.style.display = 'block';
        monthlyCosts.nas = nasDevices * rates.nas;
        document.getElementById('nasMonthly').textContent = `$${monthlyCosts.nas.toFixed(2)}`;
        
        if (monthlyCosts.nas > 0) {
            breakdownHTML += `
                <div class="breakdown-item">
                    <span class="breakdown-label">NAS Management (${nasDevices} devices)</span>
                    <span class="breakdown-amount">$${monthlyCosts.nas.toFixed(2)}</span>
                </div>
            `;
            servicesSelected++;
        }
    } else {
        nasContent.style.display = 'none';
    }

    // Calculate totals
    totalMonthly = Object.values(monthlyCosts).reduce((sum, cost) => sum + cost, 0);
    const totalYearly = totalMonthly * 12;

    // Update summary
    const summaryBreakdown = document.getElementById('summaryBreakdown');
    if (servicesSelected === 0 || totalMonthly === 0) {
        summaryBreakdown.innerHTML = '<p class="no-services">No services selected yet</p>';
    } else {
        summaryBreakdown.innerHTML = breakdownHTML;
    }

    // Update totals
    document.getElementById('monthlyTotal').textContent = `$${totalMonthly.toFixed(2)}`;
    document.getElementById('yearlyTotal').textContent = `$${totalYearly.toFixed(2)}`;

    // Add animation to totals
    animateValue('monthlyTotal', totalMonthly);
    animateValue('yearlyTotal', totalYearly);
}

function animateValue(elementId, finalValue) {
    const element = document.getElementById(elementId);
    element.style.transform = 'scale(1.1)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 200);
}

function resetCalculator() {
    // Reset all toggles
    document.getElementById('endpointToggle').checked = false;
    document.getElementById('networkToggle').checked = false;
    document.getElementById('iotToggle').checked = false;
    document.getElementById('cameraToggle').checked = false;
    document.getElementById('phoneToggle').checked = false;
    document.getElementById('nasToggle').checked = false;

    // Reset all inputs
    document.getElementById('endpointDevices').value = 0;
    document.getElementById('networkDevices').value = 0;
    document.getElementById('iotDevices').value = 0;
    document.getElementById('cameraDevices').value = 0;
    document.getElementById('nasDevices').value = 0;

    // Recalculate
    calculateTotal();
}

// Initialize calculator
document.addEventListener('DOMContentLoaded', function() {
    calculateTotal();
});
