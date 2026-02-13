// Pricing configuration based on SLA
const services = {
    endpoint: {
        pricePerDevice: 2.76,
        minimum: 50
    },
    network: {
        pricePerDevice: 3.79,
        minimum: 50
    },
    iot: {
        pricePerDevice: 0.25,
        minimum: 0
    },
    camera: {
        pricePerDevice: 0.93,
        minimum: 25
    },
    phone: {
        flatRate: 90
    },
    nas: {
        flatRate: 25
    }
};

function updateCalculator() {
    let monthlyTotal = 0;
    const items = [];

    // Endpoint Protection
    const endpointToggle = document.getElementById('endpoint-toggle').checked;
    const endpointDevices = parseInt(document.getElementById('endpoint-devices').value) || 0;
    if (endpointToggle && endpointDevices > 0) {
        const calculated = endpointDevices * services.endpoint.pricePerDevice;
        const cost = Math.max(calculated, services.endpoint.minimum);
        monthlyTotal += cost;
        items.push({
            name: 'Endpoint Protection',
            detail: `${endpointDevices} devices × $${services.endpoint.pricePerDevice.toFixed(2)}`,
            price: cost,
            hasMinimum: cost === services.endpoint.minimum && calculated < services.endpoint.minimum
        });
    }

    // Network Management
    const networkToggle = document.getElementById('network-toggle').checked;
    const networkDevices = parseInt(document.getElementById('network-devices').value) || 0;
    if (networkToggle && networkDevices > 0) {
        const calculated = networkDevices * services.network.pricePerDevice;
        const cost = Math.max(calculated, services.network.minimum);
        monthlyTotal += cost;
        items.push({
            name: 'Network Management',
            detail: `${networkDevices} devices × $${services.network.pricePerDevice.toFixed(2)}`,
            price: cost,
            hasMinimum: cost === services.network.minimum && calculated < services.network.minimum
        });
    }

    // IOT Device Management
    const iotToggle = document.getElementById('iot-toggle').checked;
    const iotDevices = parseInt(document.getElementById('iot-devices').value) || 0;
    if (iotToggle && iotDevices > 0) {
        const cost = iotDevices * services.iot.pricePerDevice;
        monthlyTotal += cost;
        items.push({
            name: 'IOT Device Management',
            detail: `${iotDevices} devices × $${services.iot.pricePerDevice.toFixed(2)}`,
            price: cost,
            hasMinimum: false
        });
    }

    // Camera System
    const cameraToggle = document.getElementById('camera-toggle').checked;
    const cameraDevices = parseInt(document.getElementById('camera-devices').value) || 0;
    if (cameraToggle && cameraDevices > 0) {
        const calculated = cameraDevices * services.camera.pricePerDevice;
        const cost = Math.max(calculated, services.camera.minimum);
        monthlyTotal += cost;
        items.push({
            name: 'Camera System',
            detail: `${cameraDevices} cameras × $${services.camera.pricePerDevice.toFixed(2)}`,
            price: cost,
            hasMinimum: cost === services.camera.minimum && calculated < services.camera.minimum
        });
    }

    // Phone System
    const phoneToggle = document.getElementById('phone-toggle').checked;
    if (phoneToggle) {
        monthlyTotal += services.phone.flatRate;
        items.push({
            name: 'Phone System Management',
            detail: 'Monthly service',
            price: services.phone.flatRate,
            hasMinimum: false
        });
    }

    // NAS Management
    const nasToggle = document.getElementById('nas-toggle').checked;
    if (nasToggle) {
        monthlyTotal += services.nas.flatRate;
        items.push({
            name: 'NAS Management',
            detail: 'Monthly service',
            price: services.nas.flatRate,
            hasMinimum: false
        });
    }

    // Update the UI
    updateSummary(items, monthlyTotal);
}

function updateSummary(items, monthlyTotal) {
    const summaryContainer = document.getElementById('summary-items');
    
    if (items.length === 0) {
        summaryContainer.innerHTML = '<p style="opacity: 0.6; text-align: center; padding: 2rem 0;">Select services to see pricing</p>';
    } else {
        summaryContainer.innerHTML = items.map(item => `
            <div class="summary-item">
                <div>
                    <div style="font-weight: 600;">${item.name}</div>
                    <div style="font-size: 0.875rem; opacity: 0.7;">${item.detail}${item.hasMinimum ? ' (minimum applied)' : ''}</div>
                </div>
                <div style="font-weight: 600;">$${item.price.toFixed(2)}</div>
            </div>
        `).join('');
    }

    // Update totals
    const yearlyTotal = monthlyTotal * 12;
    document.getElementById('monthly-total').textContent = `$${monthlyTotal.toFixed(2)}`;
    document.getElementById('yearly-total').textContent = `$${yearlyTotal.toFixed(2)}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCalculator();
});
