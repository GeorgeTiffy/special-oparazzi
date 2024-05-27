namespace SpriteKind {
    export const Film = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const Bananna = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Dialogue = SpriteKind.create()
    export const Drone = SpriteKind.create()
    export const Door = SpriteKind.create()
    export const Object = SpriteKind.create()
    export const Car = SpriteKind.create()
    export const SpeedBump = SpriteKind.create()
    export const Car2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const HidingPlace = SpriteKind.create()
    export const VisualFlourish = SpriteKind.create()
    export const Target = SpriteKind.create()
    export const Tut_0 = SpriteKind.create()
    export const Tut_1 = SpriteKind.create()
    export const Tut_2 = SpriteKind.create()
    export const Tut_3 = SpriteKind.create()
    export const Cameras = SpriteKind.create()
}
// interaction between patrolling enemies and players
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Hidden = 0
    music.setVolume(255)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    Checkpoint()
    if (otherSprite.vy != 0) {
        otherSprite.vy = 0
        pause(2000)
        otherSprite.vy = 75
    } else if (otherSprite.vx != 0) {
        otherSprite.vx = 0
        pause(2000)
        otherSprite.vx = 75
    }
})
// Upwards Camera Shot
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.A.isPressed()) {
        if (Film_Count > 0) {
            music.setVolume(255)
            music.play(music.createSong(assets.song`Click Sound`), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(assets.image`Flash Up`, Spr_Player, 0, -200)
            Film_Count += -1
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
function RunLevel () {
    if (Level == 1) {
        DialogueOne()
    }
    if (Level == 2) {
        LVL_11()
    }
    if (Level == 3) {
        LVL_12()
    }
    if (Level == 4) {
        PlayerZoo()
    }
}
sprites.onOverlap(SpriteKind.Drone, SpriteKind.Car2, function (sprite, otherSprite) {
    music.stopAllSounds()
    Spr_drone.vx = 0
    Spr_drone.vy = 0
    sprites.destroy(Spr_drone, effects.fire, 50)
    music.stopAllSounds()
    scene.cameraShake(4, 500)
    music.setVolume(101)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(1000)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
    Spr_drone = sprites.create(assets.image`RCCar`, SpriteKind.Drone)
    tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
    DroneActive = 0
})
function E_Patrol () {
    if (Spr_Pat.vy < 0) {
        Spr_Pat.setImage(assets.image`pat_back`)
    } else if (Spr_Pat.vy > 0) {
        Spr_Pat.setImage(assets.image`pat_front`)
    } else if (Spr_Pat.vx > 0) {
        Spr_Pat.setImage(assets.image`pat_right`)
    } else if (Spr_Pat.vx < 0) {
        Spr_Pat.setImage(assets.image`pat_left`)
    }
    if (Spr_Pat2.vy < 0) {
        Spr_Pat2.setImage(assets.image`pat_back`)
    } else if (Spr_Pat2.vy > 0) {
        Spr_Pat2.setImage(assets.image`pat_front`)
    } else if (Spr_Pat2.vx > 0) {
        Spr_Pat2.setImage(assets.image`pat_right`)
    } else if (Spr_Pat2.vx < 0) {
        Spr_Pat2.setImage(assets.image`pat_left`)
    }
}
function RaziDialogue () {
    game.setDialogFrame(assets.image`RatziTextbox`)
    game.setDialogCursor(assets.image`BlackTextArrow`)
    game.setDialogTextColor(15)
}
sprites.onOverlap(SpriteKind.Drone, SpriteKind.Car, function (sprite, otherSprite) {
    music.stopAllSounds()
    Spr_drone.vx = 0
    Spr_drone.vy = 0
    sprites.destroy(Spr_drone, effects.fire, 50)
    music.stopAllSounds()
    scene.cameraShake(4, 500)
    music.setVolume(101)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(1000)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
    Spr_drone = sprites.create(assets.image`RCCar`, SpriteKind.Drone)
    tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
    DroneActive = 0
})
// interaction between patrolling enemies and camera flash
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Target, function (sprite, otherSprite) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Drone, SpriteKind.Enemy2, function (sprite, otherSprite) {
    music.stopAllSounds()
    Spr_drone.vx = 0
    Spr_drone.vy = 0
    sprites.destroy(Spr_drone, effects.fire, 50)
    music.stopAllSounds()
    scene.cameraShake(4, 500)
    music.setVolume(101)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(1000)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
    Spr_drone = sprites.create(assets.image`RCCar`, SpriteKind.Drone)
    tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
    DroneActive = 0
})
function Cars_2 () {
    if (CheckPoint == 1) {
        if (CarScore2 == 1) {
            Meancar4 = sprites.create(assets.image`CarDown_G`, SpriteKind.Car2)
            tiles.placeOnTile(Meancar4, tiles.getTileLocation(22, 47))
            Meancar4.vy = 75
        } else if (CarScore2 == 2) {
            tiles.placeOnTile(Meancar4, tiles.getTileLocation(1, 1))
            MeanCar5 = sprites.create(assets.image`CarDown_R`, SpriteKind.Car2)
            tiles.placeOnTile(MeanCar5, tiles.getTileLocation(22, 47))
            MeanCar5.vy = 125
        } else if (CarScore2 == 3) {
            tiles.placeOnTile(MeanCar5, tiles.getTileLocation(1, 1))
            timer.after(2000, function () {
                MeanCar6 = sprites.create(assets.image`CarDown_DANGER2`, SpriteKind.Car2)
                tiles.placeOnTile(MeanCar6, tiles.getTileLocation(22, 47))
                MeanCar6.vy = 300
            })
        } else if (CarScore2 == 4) {
            tiles.placeOnTile(MeanCar6, tiles.getTileLocation(1, 1))
            CarScore2 = 1
            Cars_2()
        }
    } else {
        sprites.destroy(Meancar4)
        sprites.destroy(MeanCar5)
        sprites.destroy(MeanCar6)
    }
}
function E_Sunglasses () {
    if (Spr_Glas1.vy < 0) {
        Spr_Glas1.setImage(assets.image`glas_back`)
    } else if (Spr_Glas1.vy > 0) {
        Spr_Glas1.setImage(assets.image`glas_front`)
    } else if (Spr_Glas1.vx > 0) {
        Spr_Glas1.setImage(assets.image`glas_right`)
    } else if (Spr_Glas1.vx < 0) {
        Spr_Glas1.setImage(assets.image`glas_left`)
    }
    if (Spr_Glas2.vy < 0) {
        Spr_Glas2.setImage(assets.image`glas_back`)
    } else if (Spr_Glas2.vy > 0) {
        Spr_Glas2.setImage(assets.image`glas_front`)
    } else if (Spr_Glas2.vx > 0) {
        Spr_Glas2.setImage(assets.image`glas_right`)
    } else if (Spr_Glas2.vx < 0) {
        Spr_Glas2.setImage(assets.image`glas_left`)
    }
}
// Left camera shot
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.A.isPressed()) {
        if (Film_Count > 0) {
            music.setVolume(255)
            music.play(music.createSong(assets.song`Click Sound`), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(assets.image`Flash Left`, Spr_Player, -200, 0)
            Film_Count += -1
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
info.onLifeZero(function () {
    music.stopAllSounds()
    game.setGameOverEffect(false, effects.melt)
    game.setGameOverMessage(false, "YOU FAILED")
    game.setGameOverPlayable(false, music.melodyPlayable(music.bigCrash), false)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Car2, SpriteKind.SpeedBump, function (sprite, otherSprite) {
    CarScore2 += 1
    Cars_2()
})
function Cars_1 () {
    if (CheckPoint == 1) {
        if (CarScore == 1) {
            MeanCar = sprites.create(assets.image`CarDown_G`, SpriteKind.Car)
            tiles.placeOnTile(MeanCar, tiles.getTileLocation(19, 47))
            MeanCar.vy = 100
        } else if (CarScore == 2) {
            tiles.placeOnTile(MeanCar, tiles.getTileLocation(1, 1))
            timer.after(2000, function () {
                MeanCar2 = sprites.create(assets.image`CarDown_DANGER2`, SpriteKind.Car)
                tiles.placeOnTile(MeanCar2, tiles.getTileLocation(19, 47))
                MeanCar2.vy = 250
            })
        } else if (CarScore == 3) {
            tiles.placeOnTile(MeanCar2, tiles.getTileLocation(1, 1))
            MeanCar3 = sprites.create(assets.image`CarDown_R`, SpriteKind.Car)
            tiles.placeOnTile(MeanCar3, tiles.getTileLocation(19, 47))
            MeanCar3.vy = 150
        } else if (CarScore == 4) {
            tiles.placeOnTile(MeanCar3, tiles.getTileLocation(1, 1))
            CarScore = 1
            Cars_1()
        }
    } else if (CheckPoint == 2) {
        sprites.destroy(MeanCar)
        sprites.destroy(MeanCar2)
        sprites.destroy(MeanCar3)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut_2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.setDialogTextColor(9)
    game.setDialogFrame(img`
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        9 9 f f f f f f f f f f f 9 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 9 f f f f f f f f f f f 9 9 
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        `)
    game.showLongText("These enemies are bodyguards, using your camera you should be able to stun them.", DialogLayout.Center)
    game.showLongText("To flash your camera hold A and point in the direction you want to shoot it in. ", DialogLayout.Center)
})
// resets movement once picture is taken
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Spr_Player, 100, 100)
})
// interaction between patrolling enemies and players
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    Hidden = 0
    music.setVolume(255)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    Checkpoint()
    if (otherSprite.vy != 0) {
        otherSprite.vy = 0
        pause(2000)
        otherSprite.vy = 75
    } else if (otherSprite.vx != 0) {
        otherSprite.vx = 0
        pause(2000)
        otherSprite.vx = 75
    }
})
// Interaction that allows player to pick up film
sprites.onOverlap(SpriteKind.Player, SpriteKind.Film, function (sprite, otherSprite) {
    Film_Count += 1
    sprites.destroy(Spr_Film)
    Spr_Player.sayText("I've got " + Film_Count + " Film.", 1000, true)
    music.setVolume(111)
    music.play(music.createSong(assets.song`Refill Film`), music.PlaybackMode.UntilDone)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hidden == 0) {
        if (DroneActive == 1) {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            Spr_Player.setImage(assets.image`RatzDrone_Down`)
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
        }
        animation.runImageAnimation(
        Spr_Player,
        assets.animation`RatziWalk_Down0`,
        100,
        true
        )
    }
})
// right camera shot
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.A.isPressed()) {
        if (Film_Count > 0) {
            music.setVolume(255)
            music.play(music.createSong(assets.song`Click Sound`), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(assets.image`Flash Right`, Spr_Player, 200, 0)
            Film_Count += -1
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (DroneActive == 0) {
        DroneActive = 1
        controller.moveSprite(Spr_Player, 0, 0)
        spriteutils.placeAngleFrom(
        Spr_drone,
        0,
        1,
        Spr_Player
        )
        scene.cameraFollowSprite(Spr_drone)
        music.stopAllSounds()
    }
})
sprites.onOverlap(SpriteKind.HidingPlace, SpriteKind.Door, function (sprite, otherSprite) {
    MovingCrowd.vx = 0
    MovingCrowd.vy = 0
    timer.after(500, function () {
        Hidden = 0
        tiles.placeOnTile(MovingCrowd, tiles.getTileLocation(72, 33))
        animation.runImageAnimation(
        Door1,
        assets.animation`myAnim0`,
        700,
        false
        )
        SpawnCrowd()
    })
    if (Hidden == 1) {
        Level = 3
        sprites.destroy(Spr_Player)
        BackDoor = 1
        RunLevel()
    }
})
// interaction between patrolling enemies and players
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car2, function (sprite, otherSprite) {
    if (otherSprite.vy != 0) {
        music.setVolume(255)
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        Checkpoint()
    }
})
function GlassesChase () {
    if (Hidden == 0) {
        if (spriteutils.distanceBetween(Spr_Glas1, Spr_Player) < 75) {
            Spr_Glas1.follow(Spr_Player, 75)
        } else if (spriteutils.distanceBetween(Spr_Glas1, Spr_Player) > 120) {
            Spr_Glas1.follow(Spr_Player, 0)
            tiles.placeOnTile(Spr_Glas1, tiles.getTileLocation(58, 28))
        }
    } else if (Hidden == 1) {
        Spr_Glas1.follow(Spr_Player, 0)
    }
    if (Hidden == 0) {
        if (spriteutils.distanceBetween(Spr_Glas2, Spr_Player) < 75) {
            Spr_Glas2.follow(Spr_Player, 75)
        } else if (spriteutils.distanceBetween(Spr_Glas2, Spr_Player) > 120) {
            Spr_Glas2.follow(Spr_Player, 0)
            tiles.placeOnTile(Spr_Glas2, tiles.getTileLocation(61, 28))
        }
    } else if (Hidden == 1) {
        Spr_Glas2.follow(Spr_Player, 0)
    }
}
function LVL_11 () {
    CheckPoint = 1
    music.stopAllSounds()
    pause(2000)
    scene.setBackgroundImage(assets.image`Background`)
    tiles.setCurrentTilemap(tilemap`Lvl1_Rm1`)
    Film_Count = 5
    Item_Name = 0
    Hidden = 0
    info.setScore(0)
    info.setLife(3)
    spriteutils.setLifeImage(assets.image`Little Goobs`)
    Spr_Film = sprites.create(assets.image`Film`, SpriteKind.Film)
    tiles.placeOnTile(Spr_Film, tiles.getTileLocation(20, 2))
    Spr_Pat = sprites.create(assets.image`pat_front`, SpriteKind.Enemy)
    tiles.placeOnTile(Spr_Pat, tiles.getTileLocation(35, 56))
    Spr_Pat.vy = 75
    Spr_Pat.setBounceOnWall(true)
    Spr_Pat2 = sprites.create(assets.image`pat_front`, SpriteKind.Enemy)
    tiles.placeOnTile(Spr_Pat2, tiles.getTileLocation(37, 50))
    Spr_Pat2.vy = 75
    Spr_Pat2.setBounceOnWall(true)
    Spr_Glas = sprites.create(assets.image`glas_left`, SpriteKind.Enemy2)
    tiles.placeOnTile(Spr_Glas, tiles.getTileLocation(50, 34))
    Spr_Glas1 = sprites.create(assets.image`glas_front`, SpriteKind.Enemy2)
    tiles.placeOnTile(Spr_Glas1, tiles.getTileLocation(58, 28))
    Spr_Glas2 = sprites.create(assets.image`glas_front`, SpriteKind.Enemy2)
    tiles.placeOnTile(Spr_Glas2, tiles.getTileLocation(61, 28))
    MovingCrowd = sprites.create(assets.image`Crowd_Left`, SpriteKind.HidingPlace)
    tiles.placeOnTile(MovingCrowd, tiles.getTileLocation(72, 33))
    SpawnCrowd()
    TicketWindow = sprites.create(assets.image`myImage2`, SpriteKind.VisualFlourish)
    tiles.placeOnTile(TicketWindow, tiles.getTileLocation(52, 23))
    TheaterSign = sprites.create(assets.image`myImage3`, SpriteKind.VisualFlourish)
    tiles.placeOnTile(TheaterSign, tiles.getTileLocation(35, 19))
    TheaterSign2 = sprites.create(assets.image`myImage3`, SpriteKind.VisualFlourish)
    tiles.placeOnTile(TheaterSign2, tiles.getTileLocation(66, 19))
    Door1 = sprites.create(assets.image`Theater Door`, SpriteKind.Door)
    tiles.placeOnTile(Door1, tiles.getTileLocation(59, 24))
    StationaryCar = sprites.create(assets.image`CarRight_O`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(28, 49))
    StationaryCar = sprites.create(assets.image`CarDown_R`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(31, 50))
    StationaryCar = sprites.create(assets.image`CarDown_Br`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(35, 36))
    StationaryCar = sprites.create(assets.image`CarDown_R`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(39, 36))
    StationaryCar = sprites.create(assets.image`CarUp_L`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(41, 36))
    StationaryCar = sprites.create(assets.image`CarDown_G`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(33, 30))
    StationaryCar = sprites.create(assets.image`CarDown_R`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(31, 30))
    StationaryCar = sprites.create(assets.image`CarDown_B`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(28, 56))
    StationaryCar = sprites.create(assets.image`CarLeft_P`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(31, 56))
    SpeedBump2 = sprites.create(assets.image`myImage0`, SpriteKind.SpeedBump)
    tiles.placeOnTile(SpeedBump2, tiles.getTileLocation(21, 62))
    FlashCams = sprites.create(assets.image`Cameras Still`, SpriteKind.Cameras)
    tiles.placeOnTile(FlashCams, tiles.getTileLocation(27, 15))
    animation.runImageAnimation(
    FlashCams,
    assets.animation`Cameras`,
    1500,
    true
    )
    Spr_Player = sprites.create(assets.image`pap_front`, SpriteKind.Player)
    scene.cameraFollowSprite(Spr_Player)
    Spr_Player.z += 100
    controller.moveSprite(Spr_Player, 100, 100)
    Checkpoint()
    FilmUi = sprites.create(assets.image`Film_5`, SpriteKind.UI)
    FilmUi.setFlag(SpriteFlag.RelativeToCamera, true)
    FilmUi.setPosition(14, 107)
    FilmUi.z += 100
    Tutorial_0 = sprites.create(assets.image`Dialogue`, SpriteKind.Tut_0)
    tiles.placeOnTile(Tutorial_0, tiles.getTileLocation(15, 53))
    Tutorial_0.setFlag(SpriteFlag.Invisible, true)
    Tutorial_1 = sprites.create(assets.image`Dialogue`, SpriteKind.Tut_1)
    tiles.placeOnTile(Tutorial_1, tiles.getTileLocation(17, 53))
    Tutorial_1.setFlag(SpriteFlag.Invisible, true)
    Tutorial_2 = sprites.create(assets.image`Dialogue`, SpriteKind.Tut_2)
    tiles.placeOnTile(Tutorial_2, tiles.getTileLocation(33, 53))
    Tutorial_2.setFlag(SpriteFlag.Invisible, true)
    Tutorial_3 = sprites.create(assets.image`Dialogue`, SpriteKind.Tut_3)
    tiles.placeOnTile(Tutorial_3, tiles.getTileLocation(42, 53))
    Tutorial_3.setFlag(SpriteFlag.Invisible, true)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
}
function DialogueOne () {
    music.play(music.createSong(assets.song`Tip Toe Intro`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`Dialogue`)
    scene.setBackgroundImage(assets.image`Back2`)
    Spr_Play_Dialogue = sprites.create(assets.image`pap Dialogue`, SpriteKind.Dialogue)
    tiles.placeOnTile(Spr_Play_Dialogue, tiles.getTileLocation(6, 9))
    Spr_Boss = sprites.create(assets.image`Boss`, SpriteKind.Dialogue)
    tiles.placeOnTile(Spr_Boss, tiles.getTileLocation(12, 9))
    Spr_Camera = sprites.create(assets.image`Camera`, SpriteKind.Dialogue)
    tiles.placeOnTile(Spr_Camera, tiles.getTileLocation(9, 9))
    scene.cameraFollowSprite(Spr_Camera)
    BawsmanDialogue()
    game.showLongText("Ratzi I've got a job for you!", DialogLayout.Bottom)
    RaziDialogue()
    game.showLongText("Mr.Bawsman had walked up to my desk to talk", DialogLayout.Bottom)
    game.showLongText("I knew this could only mean one thing...", DialogLayout.Bottom)
    game.showLongText("he had a job for me...", DialogLayout.Bottom)
    BawsmanDialogue()
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("Right...", DialogLayout.Bottom)
    game.showLongText("As you probably already know ", DialogLayout.Bottom)
    game.showLongText("(celebrity) just starred in that new sci-fi movie", DialogLayout.Bottom)
    game.showLongText("He's been caught on the phone during his own premiere once already", DialogLayout.Bottom)
    game.showLongText("So this is prime photo opportunity!", DialogLayout.Bottom)
    RaziDialogue()
    game.showLongText("Bawsman was counting on me to do the job right, I knew I'd have to accept...", DialogLayout.Bottom)
    game.showLongText("...", DialogLayout.Bottom)
    music.stopAllSounds()
    game.showLongText("I accept", DialogLayout.Bottom)
    Level += 1
    sprites.destroy(Spr_Play_Dialogue)
    sprites.destroy(Spr_Boss)
    sprites.destroy(Spr_Camera)
}
sprites.onOverlap(SpriteKind.Car, SpriteKind.SpeedBump, function (sprite, otherSprite) {
    CarScore += 1
    Cars_1()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hidden == 0) {
        if (DroneActive == 1) {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            Spr_Player.setImage(assets.image`RatzDrone_Left`)
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            animation.runImageAnimation(
            Spr_Player,
            assets.animation`RatziWalk_Left`,
            100,
            true
            )
        }
    }
})
// interaction between patrolling enemies and players
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car, function (sprite, otherSprite) {
    if (otherSprite.vy != 0) {
        music.setVolume(255)
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        Checkpoint()
    }
})
function P_Drone () {
    if (DroneActive == 1) {
        if (controller.left.isPressed()) {
            Spr_drone.setImage(assets.image`Car_Left`)
            music.stopAllSounds()
            Spr_drone.vx = -150
            Spr_drone.vy = 0
            music.setVolume(101)
            music.play(music.createSoundEffect(WaveShape.Noise, 2010, 2010, 102, 102, 9999, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
        } else if (controller.right.isPressed()) {
            Spr_drone.setImage(assets.image`Car_Right`)
            music.stopAllSounds()
            Spr_drone.vx = 150
            Spr_drone.vy = 0
            music.setVolume(101)
            music.play(music.createSoundEffect(WaveShape.Noise, 2010, 2010, 102, 102, 9999, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
        } else if (controller.up.isPressed()) {
            Spr_drone.setImage(assets.image`Car_Up`)
            music.stopAllSounds()
            Spr_drone.vy = -150
            Spr_drone.vx = 0
            music.setVolume(101)
            music.play(music.createSoundEffect(WaveShape.Noise, 2010, 2010, 102, 102, 9999, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
        } else if (controller.down.isPressed()) {
            Spr_drone.setImage(assets.image`Car_Down`)
            music.stopAllSounds()
            Spr_drone.vy = 150
            Spr_drone.vx = 0
            music.setVolume(101)
            music.play(music.createSoundEffect(WaveShape.Noise, 2010, 2010, 102, 102, 9999, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
        }
    }
    if (Spr_drone.isHittingTile(CollisionDirection.Left)) {
        Spr_drone.vx = 0
        Spr_drone.vy = 0
        sprites.destroy(Spr_drone, effects.fire, 100)
        music.stopAllSounds()
        scene.cameraShake(4, 500)
        music.setVolume(101)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(1000)
        scene.cameraFollowSprite(Spr_Player)
        controller.moveSprite(Spr_Player)
        music.setVolume(25)
        music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
        Spr_drone = sprites.create(assets.image`Car_Right`, SpriteKind.Drone)
        tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
        DroneActive = 0
    } else if (Spr_drone.isHittingTile(CollisionDirection.Right)) {
        Spr_drone.vx = 0
        Spr_drone.vy = 0
        sprites.destroy(Spr_drone, effects.fire, 100)
        music.stopAllSounds()
        scene.cameraShake(4, 500)
        music.setVolume(101)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(1000)
        scene.cameraFollowSprite(Spr_Player)
        controller.moveSprite(Spr_Player)
        music.setVolume(25)
        music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
        Spr_drone = sprites.create(assets.image`Car_Right`, SpriteKind.Drone)
        tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
        DroneActive = 0
    } else if (Spr_drone.isHittingTile(CollisionDirection.Bottom)) {
        Spr_drone.vx = 0
        Spr_drone.vy = 0
        sprites.destroy(Spr_drone, effects.fire, 100)
        music.stopAllSounds()
        scene.cameraShake(4, 500)
        music.setVolume(101)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(1000)
        scene.cameraFollowSprite(Spr_Player)
        controller.moveSprite(Spr_Player)
        music.setVolume(25)
        music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
        Spr_drone = sprites.create(assets.image`Car_Right`, SpriteKind.Drone)
        tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
        DroneActive = 0
    } else if (Spr_drone.isHittingTile(CollisionDirection.Top)) {
        Spr_drone.vx = 0
        Spr_drone.vy = 0
        sprites.destroy(Spr_drone, effects.fire, 100)
        music.stopAllSounds()
        scene.cameraShake(4, 500)
        music.setVolume(101)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(1000)
        scene.cameraFollowSprite(Spr_Player)
        controller.moveSprite(Spr_Player)
        music.setVolume(25)
        music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
        Spr_drone = sprites.create(assets.image`Car_Right`, SpriteKind.Drone)
        tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
        DroneActive = 0
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Spr_Player, 0, 0)
    pause(200)
})
function SpawnCrowd () {
    if (CheckPoint == 1) {
        MovingCrowd.vx = -40
        timer.after(8000, function () {
            MovingCrowd.vx = 0
            MovingCrowd.vy = -40
        })
    } else {
        sprites.destroy(MovingCrowd)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hidden == 0) {
        if (DroneActive == 1) {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            Spr_Player.setImage(assets.image`RatzDrone_Right`)
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            animation.runImageAnimation(
            Spr_Player,
            assets.animation`RatziWalk_Right`,
            100,
            true
            )
        }
    }
})
function LVL_12 () {
    CheckPoint = 2
    music.stopAllSounds()
    pause(2000)
    scene.setBackgroundImage(assets.image`Background`)
    tiles.setCurrentTilemap(tilemap`Lvl1_Rm2`)
    Hidden = 0
    spriteutils.setLifeImage(assets.image`Little Goobs`)
    sprites.destroy(Spr_Film)
    sprites.destroy(Spr_Pat)
    sprites.destroy(Spr_Pat2)
    sprites.destroy(Spr_Glas)
    sprites.destroy(TicketWindow)
    sprites.destroy(TheaterSign2)
    sprites.destroy(TheaterSign)
    sprites.destroy(Door1)
    sprites.destroy(FlashCams)
    Spr_Player = sprites.create(assets.image`pap_front`, SpriteKind.Player)
    scene.cameraFollowSprite(Spr_Player)
    Spr_Player.z += 100
    controller.moveSprite(Spr_Player, 100, 100)
    Target1 = sprites.create(assets.image`Target1`, SpriteKind.Target)
    tiles.placeOnTile(Target1, tiles.getTileLocation(38, 27))
    Checkpoint()
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cameras, function (sprite, otherSprite) {
    music.setVolume(255)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    Checkpoint()
})
function BawsmanDialogue () {
    game.setDialogFrame(assets.image`BawsmanTextbox`)
    game.setDialogCursor(assets.image`WhiteTextArrow`)
    game.setDialogTextColor(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut_3, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.setDialogTextColor(9)
    game.setDialogFrame(img`
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        9 9 f f f f f f f f f f f 9 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 9 f f f f f f f f f f f 9 9 
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        `)
    game.showLongText("By the way, you won't wanna use that camera too much...", DialogLayout.Center)
    game.showLongText("If you direct your eye to the corner you'll see that you only have a limited amount of film.", DialogLayout.Center)
    game.showLongText("You'll want at least one of those so you can snap a pick of your target.", DialogLayout.Center)
    if (Film_Count == 0) {
        game.showLongText("Looks like you went a little trigger happy there, I'll help you out but just this once...", DialogLayout.Center)
        Film_Count = 1
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hidden == 0) {
        if (DroneActive == 1) {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            Spr_Player.setImage(assets.image`RatzDrone_Down`)
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            animation.runImageAnimation(
            Spr_Player,
            assets.animation`RatziWalk_Down`,
            100,
            true
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut_0, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.setDialogTextColor(9)
    game.setDialogFrame(assets.image`Tutorial`)
    game.showLongText("Moving Objects are usually pretty scary, don't let them touch you unless you want to get sent back to the last checkpoint.", DialogLayout.Center)
})
function Checkpoint () {
    if (CheckPoint == 1) {
        tiles.placeOnTile(Spr_Player, tiles.getTileLocation(10, 53))
    } else if (CheckPoint == 2) {
        tiles.placeOnTile(Spr_Player, tiles.getTileLocation(62, 28))
    }
}
// interaction between patrolling enemies and camera flash
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite.vy != 0) {
        otherSprite.vy = 0
        One_Liner = ["Eat Film!!", "Gotcha!", "Say Cheese!"]
        Spr_Player.sayText(One_Liner._pickRandom(), 1000, true)
        info.changeScoreBy(10)
        music.setVolume(111)
        music.play(music.createSong(assets.song`MY EYES`), music.PlaybackMode.UntilDone)
        pause(3000)
        otherSprite.vy = 75
    } else if (otherSprite.vx > 0) {
        otherSprite.vx = 0
        One_Liner = ["Eat Film!!", "Gotcha!", "Say Cheese!"]
        Spr_Player.sayText(One_Liner._pickRandom(), 1000, true)
        info.changeScoreBy(10)
        music.setVolume(111)
        music.play(music.createSong(assets.song`MY EYES`), music.PlaybackMode.UntilDone)
        pause(3000)
        otherSprite.vx = 75
    }
})
sprites.onOverlap(SpriteKind.Drone, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.stopAllSounds()
    Spr_drone.vx = 0
    Spr_drone.vy = 0
    sprites.destroy(Spr_drone, effects.fire, 50)
    music.stopAllSounds()
    scene.cameraShake(4, 500)
    music.setVolume(101)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(1000)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
    Spr_drone = sprites.create(assets.image`RCCar`, SpriteKind.Drone)
    tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
    DroneActive = 0
})
function PlayerZoo () {
    music.stopAllSounds()
    pause(2000)
    scene.setBackgroundImage(assets.image`Background`)
    tiles.setCurrentTilemap(tilemap`Practice Area`)
    Film_Count = 5
    Item_Name = 0
    info.setScore(0)
    info.setLife(3)
    spriteutils.setLifeImage(assets.image`Little Goobs`)
    Spr_Player = sprites.create(assets.image`pap_front`, SpriteKind.Player)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player, 100, 100)
    tiles.placeOnTile(Spr_Player, tiles.getTileLocation(2, 2))
    Spr_Film = sprites.create(assets.image`Film`, SpriteKind.Film)
    tiles.placeOnTile(Spr_Film, tiles.getTileLocation(20, 2))
    Spr_Pat = sprites.create(assets.image`pat_front`, SpriteKind.Enemy)
    tiles.placeOnTile(Spr_Pat, tiles.getTileLocation(14, 4))
    Spr_Pat.vy = 50
    Spr_Pat.setBounceOnWall(true)
    Spr_Glas = sprites.create(assets.image`glas_front`, SpriteKind.Enemy2)
    tiles.placeOnTile(Spr_Glas, tiles.getTileLocation(2, 15))
    Spr_Glas.vy = 50
    Spr_Glas.setBounceOnWall(true)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
}
// Downwards Camera Shot
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.A.isPressed()) {
        if (Film_Count > 0) {
            music.setVolume(255)
            music.play(music.createSong(assets.song`Click Sound`), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(assets.image`Flash Down`, Spr_Player, 0, 200)
            Film_Count += -1
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut_1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.setDialogTextColor(9)
    game.setDialogFrame(img`
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        9 9 f f f f f f f f f f f 9 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 9 f f f f f f f f f f f 9 9 
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        `)
    game.showLongText("Also! Whenever you take damage, you'll also lose a Camera!", DialogLayout.Center)
    game.showLongText("If you run out of cameras it's game over!", DialogLayout.Center)
    CarScore = 1
    Cars_1()
    CarScore2 = 1
    Cars_2()
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Enemy3, 1500, function (sprite) {
    PatDirection0 += 1
    if (PatDirection0 == 4) {
        PatDirection0 = 0
    }
})
let Walking = false
let PatDirection0 = 0
let One_Liner: string[] = []
let Target1: Sprite = null
let Spr_Camera: Sprite = null
let Spr_Boss: Sprite = null
let Spr_Play_Dialogue: Sprite = null
let Tutorial_3: Sprite = null
let Tutorial_2: Sprite = null
let Tutorial_1: Sprite = null
let Tutorial_0: Sprite = null
let FilmUi: Sprite = null
let FlashCams: Sprite = null
let SpeedBump2: Sprite = null
let StationaryCar: Sprite = null
let TheaterSign2: Sprite = null
let TheaterSign: Sprite = null
let TicketWindow: Sprite = null
let Spr_Glas: Sprite = null
let Item_Name = 0
let BackDoor = 0
let Door1: Sprite = null
let MovingCrowd: Sprite = null
let Spr_Film: Sprite = null
let MeanCar3: Sprite = null
let MeanCar2: Sprite = null
let MeanCar: Sprite = null
let CarScore = 0
let Spr_Glas2: Sprite = null
let Spr_Glas1: Sprite = null
let MeanCar6: Sprite = null
let MeanCar5: Sprite = null
let Meancar4: Sprite = null
let CarScore2 = 0
let CheckPoint = 0
let Spr_Pat2: Sprite = null
let Spr_Pat: Sprite = null
let Spr_Player: Sprite = null
let projectile: Sprite = null
let Film_Count = 0
let Hidden = 0
let Spr_drone: Sprite = null
let DroneActive = 0
let Level = 0
Level = 2
RunLevel()
DroneActive = 0
Spr_drone = sprites.create(assets.image`Car_Right`, SpriteKind.Drone)
game.onUpdate(function () {
    Walking = controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed()))
    if (!(Walking) || DroneActive == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
    }
    if (Film_Count == 6) {
        FilmUi.setImage(assets.image`Film_0`)
    } else if (Film_Count == 5) {
        FilmUi.setImage(assets.image`Film_5`)
    } else if (Film_Count == 4) {
        FilmUi.setImage(assets.image`Film_4`)
    } else if (Film_Count == 3) {
        FilmUi.setImage(assets.image`Film_3`)
    } else if (Film_Count == 2) {
        FilmUi.setImage(assets.image`Film_2`)
    } else if (Film_Count == 1) {
        FilmUi.setImage(assets.image`Film_1`)
    } else if (Film_Count == 0) {
        FilmUi.setImage(assets.image`Film_6`)
    } else if (Film_Count > 6) {
        Film_Count = 6
    }
})
forever(function () {
    P_Drone()
    E_Patrol()
    E_Sunglasses()
    GlassesChase()
    if (Spr_Player.overlapsWith(MovingCrowd)) {
        Hidden = 1
        animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
        Spr_Player.setImage(assets.image`Ratzi_Hidden`)
    } else if (spriteutils.distanceBetween(Spr_Player, MovingCrowd) > 30 && spriteutils.distanceBetween(Spr_Player, MovingCrowd) < 50) {
        Hidden = 0
        Spr_Player.setImage(assets.image`pap_front`)
    }
})
