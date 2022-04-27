let siteHeader = `
    <nav>
        <img id="logo" src="../images/movers_logo.png">
        <ul>
            <li id="nav-index"><a href="index.html">Home</a></li>
            <li id="nav-about"><a href="#">About</a></li>
            <li id="nav-pricing"><a href="pricing.html">Pricing</a></li>
            <li id="nav-services"><a href="#">Services</a></li>
            <li id="nav-movingtips"><a href="#">Moving Tips</a></li>
            <li id="nav-contact"><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
`;

document.getElementById("site-header").innerHTML = siteHeader;


// Adds a little selector bar under the current page in nav

var path = window.location.pathname;
var page = path.split("/").pop().split(".")[0];

var current = document.getElementById("nav-" + page);
current.classList.add("currentpage");