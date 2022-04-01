var homeContent = `            <div class="hero"></div>
<div class="content">
    <h1>AAAAAAAAAAAAAAAAA</h1>
    <div class="products">
        <div class="product">
            <div class="prod-image"></div>
            <div class="prod-desc">
                <h4>Big City</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe nostrum fuga, veritatis soluta sapiente rerum officia nihil numquam voluptas nulla odio unde in, voluptatibus ipsam dignissimos ducimus reprehenderit alias sequi. Excepturi quisquam, assumenda quod maiores dicta nam enim itaque voluptate vero ipsam quasi exercitationem temporibus, quam, pariatur labore optio.</p>
            </div>
        </div>
        <div class="product">
            <div class="prod-image"></div>
            <div class="prod-desc">
                <h4>Big City</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe nostrum fuga, veritatis soluta sapiente rerum officia nihil numquam voluptas nulla odio unde in, voluptatibus ipsam dignissimos ducimus reprehenderit alias sequi. Excepturi quisquam, assumenda quod maiores dicta nam enim itaque voluptate vero ipsam quasi exercitationem temporibus, quam, pariatur labore optio.</p>
            </div>
        </div>
        <div class="product">
            <div class="prod-image"></div>
            <div class="prod-desc">
                <h4>Big City</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe nostrum fuga, veritatis soluta sapiente rerum officia nihil numquam voluptas nulla odio unde in, voluptatibus ipsam dignissimos ducimus reprehenderit alias sequi. Excepturi quisquam, assumenda quod maiores dicta nam enim itaque voluptate vero ipsam quasi exercitationem temporibus, quam, pariatur labore optio.</p>
            </div>
        </div>
    </div>
</div>`
var aboutContent = "<h1>about</h1>"
var productsContent = "<h1>products</h1>"
var contactContent = "<h1>contact</h1>"

function addButtonListeners(){
    $("nav a").click(function(e){
        let btnId = e.currentTarget.id;
        loadPageContent(btnId);
        console.log("click");
    });
}

function loadPageContent(pageName){
    let contentName = pageName + "Content";
    $("#app").html(eval(contentName));
}

function init(){
    addButtonListeners();
}

$(document).ready(function(){
    loadPageContent("home")
    init();
})