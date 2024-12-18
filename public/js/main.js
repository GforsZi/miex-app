const apiUrl = "https://api.waifu.im/search"; // Replace with the actual API endpoint URL
const tags = ["maid", "uniform", "selfies"];
const indexAcak = Math.floor(Math.random() * tags.length);
const params = {
  included_tags: [tags[indexAcak]],
  height: ">=2000"
};
const container = document.querySelector("#container");
const queryParams = new URLSearchParams();

for (const key in params) {
  if (Array.isArray(params[key])) {
    params[key].forEach(value => {
      queryParams.append(key, value);
    });
  } else {
    queryParams.set(key, params[key]);
  }
}
const requestUrl = `${apiUrl}?${queryParams.toString()}`;

fetch(requestUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Request failed with status code: " + response.status);
    }
  })
  .then(datas => {
    // Process the response data as needed
    const dataIMG = datas.images;
    console.log(dataIMG);
    dataIMG.forEach(data => {
      console.log(data);
      container.innerHTML = `
          <div class="col">
            <div class="card mb-3 w-100">
            <div class="row g-0">
              <div class="col-md-4 text-center">
                <img width="400px" src="${data.url}" class="img-fluid rounded-start " alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body h-100">
                  <h5 class="card-title text-center">Card ${data.tags[0].name}</h5>
                  <p class="card-text">${data.tags[0].description}</p>
                  <p class="card-text"><small class="text-body-secondary">${data.uploaded_at}</small></p>
                  <a class="btn btn-primary w-100 align-content-end d-flex justify-content-center" href="">Get random picture again</a>
                </div>
              </div>
            </div>
          </div>
          </div>
    `;
    });
  })
  .catch(error => {
    console.error("An error occurred:", error.message);
  });
