namespace SpriteKind {
    export const Schildkroete = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    sprite.vx = 0
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let Wert of sprites.allOfKind(SpriteKind.Schildkroete)) {
        if (mySprite.overlapsWith(Wert)) {
            mySprite.vy = -55
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(30, 16)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = -60
})
scene.onOverlapTile(SpriteKind.Schildkroete, assets.tile`myTile1`, function (sprite, location) {
    sprite.vx = 0 - sprite.vx
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 60
})
let schildkroete: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`Level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f f . . 
    . . f e e e 4 d d d d f d d f . 
    . . . . f e e 4 e e e f b b f . 
    . . . . f 2 2 2 4 d d e b b f . 
    . . . f f 4 4 4 e d d e b f . . 
    . . . f f f f f f e e f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
mySprite.ay = 20
info.setLife(3)
mySprite.setPosition(16, 16)
scene.cameraFollowSprite(mySprite)
mySprite.fx = 10
for (let index = 0; index < 20; index++) {
    schildkroete = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Schildkroete)
    schildkroete.x = randint(70, 1500)
    schildkroete.y = 80
    schildkroete.vx = randint(-20, 20)
    schildkroete.ay = 10
}
