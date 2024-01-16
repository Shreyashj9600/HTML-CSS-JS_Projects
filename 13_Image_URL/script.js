const myPageBody = document.getElementById('my-body')    


function myFunction() {
    const ImageURL = document.getElementById('image-url').value
    // console.log(ImageURL);
    myPageBody.style.backgroundImage = `url(${ImageURL})`;
    console.log(myPageBody);
}




// function myFunction(value) {
//     // console.log(value);
//     const myPageBody = document.getElementById('#my-body')
//     myPageBody.backgroundImage = url(`${value}`);
//     console.log(backgroundImage);
//     document.querySelector('#my-body').appendChild(myPageBody)
// }
// myFunction("as")
        


// const body = document.getElementsByClassName('body');

// function myFunction() {
//     let value = document.getElementById("image-url").value;
//        console.log(value)
//     // document.querySelector('body').value
// }
// sendToBody.document.creatElement( backgroundImage = `"url('${value}')"`  )
// sendToBody.appendChild(body)


