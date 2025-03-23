// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });

    // Animation for stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });

    // Animation for bars in the chart
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        const originalHeight = bar.style.height;
        bar.style.height = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'height 1s ease';
            bar.style.height = originalHeight;
        }, 500 + index * 100);
    });

    // Mock notification functionality
    const notificationIcon = document.querySelector('.notifications i');
    
    if (notificationIcon) {
        notificationIcon.addEventListener('click', function() {
            alert('You have 3 new notifications!');
        });
    }

    // Table row hover effect
    const tableRows = document.querySelectorAll('tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(54, 162, 235, 0.1)';
            this.style.transition = 'background-color 0.3s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Simulate dynamic data updates (for demo purposes)
    setInterval(() => {
        // Randomly update one of the stat numbers for demo effect
        const statNumbers = document.querySelectorAll('.stat-info p');
        const randomIndex = Math.floor(Math.random() * statNumbers.length);
        const statElement = statNumbers[randomIndex];
        
        // Add a brief highlight effect
        statElement.style.transition = 'color 0.3s ease';
        statElement.style.color = '#36A2EB';
        
        setTimeout(() => {
            statElement.style.color = 'var(--text-primary)';
        }, 500);
    }, 8000);
});