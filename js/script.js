document.addEventListener('DOMContentLoaded', function () {
    // Update publication date dynamically
    const publicationDate = new Date('2023-11-11');
    document.getElementById('publication-date').textContent = publicationDate.toDateString();
});
