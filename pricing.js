// Pricing Calculator JavaScript - UPDATED WITH BASE DEVICES

// Pricing rates
const rates = {
    endpointBase: 50.00,
    endpointAdditional: 2.76,
    networkBase: 50.00,
    networkAdditional: 3.79,
    firewall: 25.00,
    emailSecurityBase: 50.00,
    emailSecurityAdditional: 3.00,
    backupBase: 50.00,
    backupAdditional: 5.00,
    helpdesk: 100.00,
    iot: 0.25,
    cameraBase: 25.00,
    cameraAdditional: 0.93,
    phoneBase: 90.00,
    phoneAdditional: 1.26,
    analogPhone: 5.00,
    paSystemBase: 25.00,
    paSystemAdditional: 1.26,
    nas: 25.00
};

// Base device counts included in minimums
const baseDevices = {
    endpoint: 5,
    network: 5,
    emailSecurity: 5,
    backup: 5,
    camera: 5
};

function calculateTotal() {
    let monthlyCosts = {
        endpoint: 0,
        network: 0,
        firewall: 0,
        emailSecurity: 0,
        backup: 0,
        helpdesk: 0,
        iot: 0,
        camera: 0,
        phone: 0,
        analogPhone: 0,
        paSystem: 0,
        nas: 0
    };

    let totalMonthly = 0;
    let breakdownHTML = '';
    let servicesSelected = 0;

    // Endpoint Protection (5 devices included, then $2.76 per additional)
    const endpointToggle = document.getElementById('endpointToggle');
    const endpointContent = document.getElementById('endpointContent');
    const endpointDevices = parseInt(document.getElementById('endpointDevices').value) || 0;
    
    if (endpointToggle.checked) {
        endpointContent.style.display = 'block';
        
        if (endpointDevices <= baseDevices.endpoint) {
            monthlyCosts.endpoint = rates.endpointBase;
        } else {
            monthlyCosts.endpoint = rates.endpointBase + ((endpointDevices - baseDevices.endpoint) * rates.endpointAdditional);
        }
        
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

    // Network Management (5 devices included, then $3.79 per additional)
    const networkToggle = document.getElementById('networkToggle');
    const networkContent = document.getElementById('networkContent');
    const networkDevices = parseInt(document.getElementById('networkDevices').value) || 0;
    
    if (networkToggle.checked) {
        networkContent.style.display = 'block';
        
        if (networkDevices <= baseDevices.network) {
            monthlyCosts.network = rates.networkBase;
        } else {
            monthlyCosts.network = rates.networkBase + ((networkDevices - baseDevices.network) * rates.networkAdditional);
        }
        
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

    // Managed Firewall
    const firewallToggle = document.getElementById('firewallToggle');
    const firewallContent = document.getElementById('firewallContent');
    const firewallDevices = parseInt(document.getElementById('firewallDevices').value) || 0;
    
    if (firewallToggle.checked) {
        firewallContent.style.display = 'block';
        monthlyCosts.firewall = firewallDevices * rates.firewall;
        document.getElementById('firewallMonthly').textContent = `$${monthlyCosts.firewall.toFixed(2)}`;
        
        if (monthlyCosts.firewall > 0) {
            breakdownHTML += `
                <div class="breakdown-item">
                    <span class="breakdown-label">Managed Firewall (${firewallDevices} firewalls)</span>
                    <span class="breakdown-amount">$${monthlyCosts.firewall.toFixed(2)}</span>
                </div>
            `;
            servicesSelected++;
        }
    } else {
        firewallContent.style.display = 'none';
    }

    // Anti-Phishing Email Services (5 users included, then $3 per additional)
    const emailSecurityToggle = document.getElementById('emailSecurityToggle');
    const emailSecurityContent = document.getElementById('emailSecurityContent');
    const emailUsers = parseInt(document.getElementById('emailUsers').value) || 0;
    
    if (emailSecurityToggle.checked) {
        emailSecurityContent.style.display = 'block';
        
        if (emailUsers <= baseDevices.emailSecurity) {
            monthlyCosts.emailSecurity = rates.emailSecurityBase;
        } else {
            monthlyCosts.emailSecurity = rates.emailSecurityBase + ((emailUsers - baseDevices.emailSecurity) * rates.emailSecurityAdditional);
        }
        
        document.getElementById('emailSecurityMonthly').textContent = `$${monthlyCosts.emailSecurity.toFixed(2)}`;
        
        breakdownHTML += `
            <div class="breakdown-item">
                <span class="breakdown-label">Anti-Phishing Email (${emailUsers} users)</span>
                <span class="breakdown-amount">$${monthlyCosts.emailSecurity.toFixed(2)}</span>
            </div>
        `;
        servicesSelected++;
    } else {
        emailSecurityContent.style.display = 'none';
    }

    // Backup Services (5 devices included, then $5 per additional)
    const backupToggle = document.getElementById('backupToggle');
    const backupContent = document.getElementById('backupContent');
    const backupDevices = parseInt(document.getElementById('backupDevices').value) || 0;
    
    if (backupToggle.checked) {
        backupContent.style.display = 'block';
        
        if (backupDevices <= baseDevices.backup) {
            monthlyCosts.backup = rates.backupBase;
        } else {
            monthlyCosts.backup = rates.backupBase + ((backupDevices - baseDevices.backup) * rates.backupAdditional);
        }
        
        document.getElementById('backupMonthly').textContent = `$${monthlyCosts.backup.toFixed(2)}`;
        
        breakdownHTML += `
            <div class="breakdown-item">
                <span class="breakdown-label">Backup Services (${backupDevices} devices)</span>
                <span class="breakdown-amount">$${monthlyCosts.backup.toFixed(2)}</span>
            </div>
        `;
        servicesSelected++;
    } else {
        backupContent.style.display = 'none';
    }

    // Helpdesk Services (FREE with 3+ services)
    const helpdeskToggle = document.getElementById('helpdeskToggle');
    const helpdeskContent = document.getElementById('helpdeskContent');
    const helpdeskBenefit = document.getElementById('helpdeskBenefit');
    
    if (helpdeskToggle.checked) {
        helpdeskContent.style.display = 'block';
        
        // Check if 3 or more OTHER services are selected (not counting helpdesk itself)
        const isFree = servicesSelected >= 3;
        monthlyCosts.helpdesk = isFree ? 0 : rates.helpdesk;
        
        if (isFree) {
            helpdeskBenefit.style.display = 'block';
            document.getElementById('helpdeskMonthly').textContent = '$0.00 (FREE!)';
        } else {
            helpdeskBenefit.style.display = 'none';
            document.getElementById('helpdeskMonthly').textContent = `$${monthlyCosts.helpdesk.toFixed(2)}`;
        }
        
        breakdownHTML += `
            <div class="breakdown-item">
                <span class="breakdown-label">24/7 Helpdesk Services ${isFree ? '(FREE!)' : ''}</span>
                <span class="breakdown-amount">$${monthlyCosts.helpdesk.toFixed(2)}</span>
            </div>
        `;
        
        if (!isFree) {
            servicesSelected++;
        }
    } else {
        helpdeskContent.style.display = 'none';
        helpdeskBenefit.style.display = 'none';
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

    // Camera System (5 cameras included, then $0.93 per additional)
    const cameraToggle = document.getElementById('cameraToggle');
    const cameraContent = document.getElementById('cameraContent');
    const cameraDevices = parseInt(document.getElementById('cameraDevices').value) || 0;
    
    if (cameraToggle.checked) {
        cameraContent.style.display = 'block';
        
        if (cameraDevices <= baseDevices.camera) {
            monthlyCosts.camera = rates.cameraBase;
        } else {
            monthlyCosts.camera = rates.cameraBase + ((cameraDevices - baseDevices.camera) * rates.cameraAdditional);
        }
        
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

    // Phone System Management (Updated pricing model)
    const phoneToggle = document.getElementById('phoneToggle');
    const phoneContent = document.getElementById('phoneContent');
    const phoneUsers = parseInt(document.getElementById('phoneUsers').value) || 0;
    
    if (phoneToggle.checked) {
        phoneContent.style.display = 'block';
        
        if (phoneUsers <= 10) {
            monthlyCosts.phone = rates.phoneBase;
        } else {
            monthlyCosts.phone = rates.phoneBase + ((phoneUsers - 10) * rates.phoneAdditional);
        }
        
        document.getElementById('phoneMonthly').textContent = `$${monthlyCosts.phone.toFixed(2)}`;
        
        breakdownHTML += `
            <div class="breakdown-item">
                <span class="breakdown-label">VoIP Phone System (${phoneUsers} users/devices)</span>
                <span class="breakdown-amount">$${monthlyCosts.phone.toFixed(2)}</span>
            </div>
        `;
        servicesSelected++;
    } else {
        phoneContent.style.display = 'none';
    }

    // Analog Phone Services
    const analogPhoneToggle = document.getElementById('analogPhoneToggle');
    const analogPhoneContent = document.getElementById('analogPhoneContent');
    const analogLines = parseInt(document.getElementById('analogLines').value) || 0;
    
    if (analogPhoneToggle.checked) {
        analogPhoneContent.style.display = 'block';
        monthlyCosts.analogPhone = analogLines * rates.analogPhone;
        document.getElementById('analogPhoneMonthly').textContent = `$${monthlyCosts.analogPhone.toFixed(2)}`;
        
        if (monthlyCosts.analogPhone > 0) {
            breakdownHTML += `
                <div class="breakdown-item">
                    <span class="breakdown-label">Analog Phone Services (${analogLines} lines)</span>
                    <span class="breakdown-amount">$${monthlyCosts.analogPhone.toFixed(2)}</span>
                </div>
            `;
            servicesSelected++;
        }
    } else {
        analogPhoneContent.style.display = 'none';
    }

    // IP-based PA System (Updated pricing model)
    const paSystemToggle = document.getElementById('paSystemToggle');
    const paSystemContent = document.getElementById('paSystemContent');
    const paDevices = parseInt(document.getElementById('paDevices').value) || 0;
    
    if (paSystemToggle.checked) {
        paSystemContent.style.display = 'block';
        
        if (paDevices <= 10) {
            monthlyCosts.paSystem = rates.paSystemBase;
        } else {
            monthlyCosts.paSystem = rates.paSystemBase + ((paDevices - 10) * rates.paSystemAdditional);
        }
        
        document.getElementById('paSystemMonthly').textContent = `$${monthlyCosts.paSystem.toFixed(2)}`;
        
        breakdownHTML += `
            <div class="breakdown-item">
                <span class="breakdown-label">IP-based PA System (${paDevices} devices)</span>
                <span class="breakdown-amount">$${monthlyCosts.paSystem.toFixed(2)}</span>
            </div>
        `;
        servicesSelected++;
    } else {
        paSystemContent.style.display = 'none';
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

    // Show Premium Benefits if 3+ services selected
    const premiumBenefits = document.getElementById('premiumBenefits');
    const benefitsList = document.getElementById('benefitsList');
    
    if (servicesSelected >= 3) {
        premiumBenefits.style.display = 'block';
        benefitsList.innerHTML = `
            <li>FREE 24/7 Helpdesk Support (saves $100/month)</li>
            <li>In-stock critical spare parts for same-day deployment</li>
            <li>Priority support response times</li>
        `;
    } else {
        premiumBenefits.style.display = 'none';
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
    document.getElementById('firewallToggle').checked = false;
    document.getElementById('emailSecurityToggle').checked = false;
    document.getElementById('backupToggle').checked = false;
    document.getElementById('helpdeskToggle').checked = false;
    document.getElementById('iotToggle').checked = false;
    document.getElementById('cameraToggle').checked = false;
    document.getElementById('phoneToggle').checked = false;
    document.getElementById('analogPhoneToggle').checked = false;
    document.getElementById('paSystemToggle').checked = false;
    document.getElementById('nasToggle').checked = false;

    // Reset all inputs
    document.getElementById('endpointDevices').value = 0;
    document.getElementById('networkDevices').value = 0;
    document.getElementById('firewallDevices').value = 0;
    document.getElementById('emailUsers').value = 0;
    document.getElementById('backupDevices').value = 0;
    document.getElementById('iotDevices').value = 0;
    document.getElementById('cameraDevices').value = 0;
    document.getElementById('phoneUsers').value = 0;
    document.getElementById('analogLines').value = 0;
    document.getElementById('paDevices').value = 0;
    document.getElementById('nasDevices').value = 0;

    // Recalculate
    calculateTotal();
}

// Initialize calculator
document.addEventListener('DOMContentLoaded', function() {
    calculateTotal();
});
