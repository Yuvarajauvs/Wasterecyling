window.addEventListener('scroll', function() {
    const statsSection = document.getElementById('impact');
    const stats = document.querySelectorAll('.stat-item h3');
    
    const sectionPosition = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionPosition < windowHeight) {
      stats.forEach(stat => {
        stat.classList.add('animate');
      });
    }
  });
// our impact 
const statItems = document.querySelectorAll(".stat-item");

    const observerOptions = {
      root: null, // Observe viewport
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add the animation class
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    statItems.forEach((item) => {
      observer.observe(item);
    });


// How Process js works 
  // JavaScript function to handle step clicks
  function showContent(stepNumber) {
    const contentTitle = document.getElementById("contentTitle");
    const contentText = document.getElementById("contentText");
    const processImage = document.getElementById("processImage");

    if (stepNumber === 1) {
      contentTitle.textContent = "Collection Wastage";
      contentText.textContent = "Details about the collection of wastage.";
      processImage.src = "Service1.jpg"; // Add the correct image path
      processImage.style.display = "block"; // Make image visible
    } else if (stepNumber === 2) {
      contentTitle.textContent = "Pickup Waste";
      contentText.textContent = "Details about the waste pickup processetails about the waste pickup processetails about the waste pickup processetails about the waste pickup processetails about the waste pickup processetails about the waste pickup processetails about the waste pickup process.";
      processImage.src = "hello1.jpg"; // Add the correct image path
      processImage.style.display = "block"; // Make image visible
    } else if (stepNumber === 3) {
      contentTitle.textContent = "Reduce Garbage";
      contentText.textContent = "Details about how to reduce garbage.";
      processImage.src = "path_to_reduce_image.jpg"; // Add the correct image path
      processImage.style.display = "block"; // Make image visible
    } else if (stepNumber === 4) {
      contentTitle.textContent = "Recycling Process";
      contentText.textContent = "Details about the recycling process.";
      processImage.src = "path_to_recycling_image.jpg"; // Add the correct image path
      processImage.style.display = "block"; // Make image visible
    }
  }







