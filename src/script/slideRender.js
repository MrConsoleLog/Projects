const slideInsert = () =>{
    var panel = document.getElementById("dynamicPanel")
    //can use for loop here
    for(let i in slidesData.img){
        panel.innerHTML = panel.innerHTML + `
        <div class="bannerSlides fade">
            <a href="#"><img src=${slidesData.img[i]} style="width:100%"></a>
            <div class="projectName">${slidesData.project[i]}</div>
        </div>
        `
    }
}
const fileHandle = async () =>{//dynamic input use in progress
    let fileHandle = null;
const options = {
  types: [
    {
      description: 'Markdown Files',
      accept: {
        'text/javascript': ['.js'],
      },
    },
  ],
};

[fileHandle] = await window.showOpenFilePicker(options);

const file = await fileHandle.getFile();
const contents = await file.text();

}

slideInsert()