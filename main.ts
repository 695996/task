namespace SpriteKind {
    export const Princess = SpriteKind.create()
    export const funtion = SpriteKind.create()
    export const conversation = SpriteKind.create()
    export const funtion2 = SpriteKind.create()
    export const funtion1 = SpriteKind.create()
}
function moveplayerr () {
    controller.moveSprite(player2, 100, 100)
    return 0
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scorePoints()
})
sprites.onOverlap(conversation2(), moveplayerr(), function (sprite, otherSprite) {
    player2.sayText("party party")
})
function conversation2 () {
    player2.say("Hello", 500)
    pause(500)
    princess.say("Hello!", 500)
    return 0
}
function scorePoints () {
    info.changeScoreBy(1)
    music.playSound(music.sounds(Sounds.PowerUp))
}
let princess: Sprite = null
let player2: Sprite = null
player2 = sprites.create(assets.image`no`, SpriteKind.Player)
player2.setStayInScreen(true)
princess = sprites.create(sprites.castle.princessFront0, SpriteKind.Princess)
princess.setPosition(50, 50)
