// Your JS goes here
document.body.onload = addTiles();

function addTiles() {

    // let newSquare = document.createElement("div");  // create a new div

    // newSquare.setAttribute("id", "viola");  // assign it an ID (optional — for locating later)

    // newSquare.setAttribute("class", "example");  // assign it to a class (optional — for style)

    //                             // here is where you establish what you want to create
    // let square_text = document.createTextNode("My new square.");  // create some content

    // newSquare.appendChild(square_text);  // append the content to "newSquare"

    // let squareTemplate = document.getElementById("div1");
    // document.body.appendChild(newSquare, squareTemplate);

    // -------------------------------BR------------------------- // 

    for (let i = 0; i < 9; i++) {

        for (let k = 0; k < 9; k++) {

            let tile = document.createElement("div")

            // tile.classList.add("float");

            tile.style.cssFloat = "left";

            tile.style.minWidth = "11.1%";

            tile.style.paddingBottom = "11.1%";

            if (i % 2 === 0) {

                tile.classList.add("even");

                tile.style.backgroundColor = "black";

            } else if (k % 2 === 0) {

                tile.classList.add("odd");

                tile.style.backgroundColor = "black";

            } else if (i % 2 !== 0) {

                tile.classList.add("even");

                tile.style.backgroundColor = "red";

            } else if (k % 2 !== 0) {

                tile.classList.add("odd");

                tile.style.backgroundColor = "red";

            }

            document.body.appendChild(tile);

        }
        // document.body.insertBefore(tile);
    };

    // // Create a new div element
    // let singleTile = document.createElement("div");

    // // Give the Tile some content
    // let newContent = document.createTextNode("This is my checkerboard!");

    // // Add the Tile node to the newly created div
    // singleTile.appendChild(newContent);

    // // Add the newly created element and its content into the DOM
    // let currentDiv = document.getElementById("div1");
    // document.body.insertBefore(singleTile, currentDiv);

};
