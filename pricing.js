// Pricing data
const pricing = {
    perDevice: {
        'endpoint-protection': 8,
        'device-management': 12,
    },
    perUser: {
        'email-security': 5,
    },
    fixed: {
        'network-monitoring': 200,
        'firewall-management': 150,
        'wifi-management': 100,
        'vpn-setup': 125,
        'cloud-backup': 250,
        'security-cameras': 300,
        'dark-web-monitoring': 100,
    },
    support: {
        'business-hours': 0,
        'extended-hours': 200,
        '24-7-support': 500,
    }
};

const labels = {
    'endpoint-protection': 'Endpoint Protection',
    'device-management': 'Device Management',
    'email-security': 'Email Security',
    'network-monitoring': 'Network Monitoring',
    'firewall-management': 'Firewall Management',
    'wifi-management': 'WiFi Management',
    'vpn-setup': 'VPN Setup',
    'cloud-backup': 'Cloud Backup',
    'security-cameras': 'Security Cameras',
    'dark-web-monitoring': 'Dark Web Monitoring',
    'business-hours': 'Business Hours Support',
    'extended-hours': 'Extended Hours Support',
    '24-7-support': '24/7 Support',
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Range inputs
    const computersRange = document.getElementById('computers');
    const usersRange = document.getElementById('users');
    
    computersRange.addEventListener('input', function() {
        document.getElementById('computers-value').textContent = this.value;
        updatePricing();
    });

    usersRange.addEventListener('input', function() {
        document.getElementById('users-value').textContent = this.value;
        updatePricing();
    });

    // Initial calculation
    updatePricing();
});

function toggleOption(id) {
    const checkbox = document.getElementById(id);
    checkbox.checked = !checkbox.checked;
    updatePricing();
}

function selectSupport(id) {
    document.getElementById(id).checked = true;
    updatePricing();
}

function updatePricing() {
    const computers = parseInt(document.getElementById('computers').value);
    const users = parseInt(document.getElementById('users').value);
    
    let total = 0;
    const items = [];

    // Per-device services
    for (const [service, pricePerDevice] of Object.entries(pricing.perDevice)) {
        const checkbox = document.getElementById(service);
        if (checkbox && checkbox.checked && computers > 0) {
            const itemTotal = pricePerDevice * computers;
            total += itemTotal;
            items.push({
                name: labels[service],
                detail: `${computers} × $${pricePerDevice}`,
                price: itemTotal
            });
        }
    }

    // Per-user services
    for (const [service, pricePerUser] of Object.entries(pricing.perUser)) {
        const checkbox = document.getElementById(service);
        if (checkbox && checkbox.checked && users > 0) {
            const itemTotal = pricePerUser * users;
            total += itemTotal;
            items.push({
                name: labels[service],
                detail: `${users} × $${pricePerUser}`,
                price: itemTotal
            });
        }
    }

    // Fixed-price services
    for (const [service, price] of Object.entries(pricing.fixed)) {
        const checkbox = document.getElementById(service);
        if (checkbox && checkbox.checked) {
            total += price;
            items.push({
                name: labels[service],
                detail: 'Monthly',
                price: price
            });
        }
    }

    // Support level
    for (const [level, price] of Object.entries(pricing.support)) {
        const radio = document.getElementById(level);
        if (radio && radio.checked) {
            if (price > 0) {
                total += price;
                items.push({
                    name: labels[level],
                    detail: 'Monthly',
                    price: price
                });
            }
        }
    }

    // Update UI
    updateSummary(items, total);
}

function updateSummary(items, total) {
    const summaryContainer = document.getElementById('summary-items');
    
    if (items.length === 0) {
        summaryContainer.innerHTML = '<p style="opacity: 0.6; text-align: center; padding: 2rem 0;">Select services to see pricing</p>';
    } else {
        summaryContainer.innerHTML = items.map(item => `
            <div class="summary-item">
                <div>
                    <div style="font-weight: 600;">${item.name}</div>
                    <div style="font-size: 0.875rem; opacity: 0.7;">${item.detail}</div>
                </div>
                <div style="font-weight: 600;">$${item.price}</div>
            </div>
        `).join('');
    }

    document.getElementById('total-price').textContent = `$${total}`;
}
