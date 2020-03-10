/*
Task 1

Access HTML element with id tag-line.

Access all h2 headings that belong to div with the class name bg-main-content.

Create the variable collect and assign it with content of tag-line.

Loop through the array of headings and append the content of each heading to variable collect

After the loop, use alert to print collect
*/

let tag = document.getElementById("tag-line"); // Accesses all html elements with the id of tag-line

let headings = document.querySelectorAll(".bg-main-content h2"); //Accesses all headings that belong to div with the class name bg-main-content

let collect = `${tag.textContent}\n`;

for (let heading of headings) {
	collect += `${heading.textContent}\n`;
} 

alert(collect);

/*
Task 2

Access 13th div with class name box that belongs to div with the class name bg-main-content. You can name the variable when_to_launch.

Use property children to "scoop" in array all HTML elements that belong to that div.

Create the variable collect and assign it with content of heading that belongs to gotten array.

Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.

After the loop, use alert to print collect

*/

let bsx = document.querySelectorAll('.bg-main-content .box');
let when_to_launch = bsx[12];
let scoop = when_to_launch.children;

let collect02 = `${scoop[0].innerText}\n\n`;
for (let i = 1; i < scoop.length; i++) {
    collect02 += scoop[i].textContent + '\n\n';
}

 alert(collect02);

