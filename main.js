canvas = new fabric.Canvas("myCanvas");
block_width = 30;
block_height = 30;
player_x = 50;
player_y = 50;
player_object = "";
block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (img_object) {
        player_object = img_object;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function block_update(get_blockImg) {
    fabric.Image.fromURL(get_blockImg, function (b_object) {
        block_object = b_object;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == 80) {
        block_width += 10;
        block_height += 10;
        document.getElementById("c_width").innerHTML = block_width;
        document.getElementById("c_height").innerHTML = block_height;
    }
    if (e.shiftKey && keyPressed == 77) {
        if (block_width > 10) {
            block_width -= 10;
            block_height -= 10;
            document.getElementById("c_width").innerHTML = block_width;
            document.getElementById("c_height").innerHTML = block_height;
        }
    }
    if (keyPressed == 37) {
        left();
    }
    if (keyPressed == 38) {
        up();
    }
    if (keyPressed == 39) {
        right();
    }
    if (keyPressed == 40) {
        down();
    }
    if (keyPressed == 87) {
        block_update("wall.jpg");
    }
    if (keyPressed == 71) {
        block_update("ground.png");
    }
    if (keyPressed == 76) {
        block_update("light_green.png");
    }
    if (keyPressed == 84) {
        block_update("trunk.jpg");
    }
    if (keyPressed == 82) {
        block_update("roof.jpg");
    }
    if (keyPressed == 89) {
        block_update("yellow_wall.png");
    }
    if (keyPressed == 68) {
        block_update("dark_green.png");
    }
    if (keyPressed == 85) {
        block_update("unique.png");
    }
    if (keyPressed == 67) {
        block_update("cloud.jpg");
    }
}

function left() {
    if (player_x > 0) {
        player_x -= block_width;
        canvas.remove(player_object)
        player_update();
    }
}

function right() {
    if (player_x < 900) {
        player_x += block_width;
        canvas.remove(player_object)
        player_update();
    }
}

function up() {
    if (player_y > 0) {
        player_y -= block_height;
        canvas.remove(player_object)
        player_update();
    }
}

function down() {
    if (player_y < 300) {
        player_y += block_height;
        canvas.remove(player_object)
        player_update();
    }
}