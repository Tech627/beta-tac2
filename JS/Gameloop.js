Sticks_input = document.getElementById("Sticks-input")
DecreasedTimeSum = new Decimal(0)
timer = new Decimal(0)
function Gameloop() {
    Stick_value = Sticks_input.value
    if(StartTheLore === true) {
        timer = timer.add(new Decimal(1).div(20))
    }
    if(timer.gte(5)) {
        document.getElementById("Lore").textContent = "."
    }
    if(timer.gte(5.5)) {
        document.getElementById("Lore").textContent = ".."
    }
    if(timer.gte(6)) {
        document.getElementById("Lore").textContent = "..."
    }
    if(timer.gte(8)) {
        document.getElementById("Lore").textContent = ""
    } 
    if(timer.gte(11)) {
        document.getElementById("Lore").textContent = "???: So..."
    }
    if(timer.gte(13)) {
        document.getElementById("Lore").textContent = "???: We finally meet.."
    }
    if(timer.gte(15.5)) {
        document.getElementById("Lore").textContent = "???: Old friend."
    }
    if(timer.gte(18)) {
        document.getElementById("Lore").textContent = "You: I thought I got rid of you.. What do you want"
    }
    if(timer.gte(21)) {
        document.getElementById("Lore").textContent = "???: Oh.. nothing special.. just.."
    }
    if(timer.gte(23)) {
        document.getElementById("Lore").textContent = "???: I'll make you pay.. with the fate worst than you did to me"
    }
    if(timer.gte(25)) {
        document.getElementById("Lore").textContent = "You: Hahahah.."
    }
    if(timer.gte(28)) {
        document.getElementById("Lore").textContent = "You: I brewed a special potion.."
    }
    if(timer.gte(31)) {
        document.getElementById("Lore").textContent = "You: See ya.."
    }
    if(timer.gte(33)) {
        document.getElementById("Lore").textContent = "You: Finally I got away from him.. How did he even survive in the first place"
    }
    if(timer.gte(36.5)) {
        document.getElementById("Lore").textContent = "(a knife gets by you)"
    }
    if(timer.gte(39)) {
        document.getElementById("Lore").textContent = "???: You can't run away.. I know our old places"
    }
    if(timer.gte(42)) {
        document.getElementById("Lore").textContent = "You: Well it's either me dead right now or you"
    }
    if(timer.gte(45)) {
        document.getElementById("Lore").textContent = "???: Join my forces and I will bless you with the best life you could ever imagine"
    }
    if(timer.gte(50)) {
        document.getElementById("Lore").textContent = "You: Well.."
    }
    if(timer.gte(53)) {
        document.getElementById("Lore").textContent = "You: That would be great if I.."
    }
    if(timer.gte(56)) {
        document.getElementById("Lore").textContent = "You: MRREDSHARK NOWW!!!"
    }
    if(timer.gte(58)) {
        document.getElementById("Lore").textContent = "(MrRedShark teleports behind trying to kill the ??? but he is too fast)"
    }
    if(timer.gte(63)) {
        document.getElementById("Lore").textContent = "???: Look my bussiness is not with you.. better run away.."
    }
    if(timer.gte(68)) {
        document.getElementById("Lore").textContent = "MrRedShark: ..."
    }
    if(timer.gte(71)) {
        document.getElementById("Lore").textContent = "???: You are just going to be quiet??"
    }
    if(timer.gte(74)) {
        document.getElementById("Lore").textContent = "MrRedShark: Well.. I wouldn't be if my troops weren't here."
    }
    if(timer.gte(78)) {
        document.getElementById("Lore").textContent = "???: I don't see anyo-"
    }
    if(timer.gte(81)) {
        document.getElementById("Lore").textContent = "(Out of nowhere troops started attacking tho they were too weak to deal any damage to ???)"
    }
    if(timer.gte(85)) {
        document.getElementById("Lore").textContent = "???: Glyph League ASSEMBLE!!!"
    }
    if(timer.gte(88)) {
        document.getElementById("Lore").textContent = "MrRedShark: The Realm Defenders shall make your last breath NOW!"
    }
    if(timer.gte(92)) {
        document.getElementById("Lore").textContent = "(The glyphs the creatures everyone thought extincted millions of years ago and vanished by... Hevipelle)"
    }
    if(timer.gte(97)) {
        document.getElementById("Lore").textContent = "MrRedShark: Right in time boys."
    }
    if(timer.gte(100)) {
        document.getElementById("Lore").textContent = "Jacorb: I found something special.. the Mastery layer"
    }
    if(timer.gte(104)) {
        document.getElementById("Lore").textContent = "Aarex: I bringed my bionic lab"
    }
    if(timer.gte(107)) {
        document.getElementById("Lore").textContent = "MrRedShark: Cover me while I transform into my eternal form"
    }
    if(timer.gte(110)) {
        document.getElementById("Lore").textContent = "Aarex & Jacorb: Okay!"
    }
    if(timer.gte(113)) {
        document.getElementById("Lore").textContent = "???: You think that can defeat the Glyphs? PATHETIC!"
    }
    if(timer.gte(117)) {
        document.getElementById("Lore").textContent = "Jacorb: It wouldn't be fun if we didn't bringed a friend of ours."
    }
    if(timer.gte(121)) {
        document.getElementById("Lore").textContent = "IU player: Hello.."
    }
    if(timer.gte(125)){
        document.getElementById("Lore").textContent = "IU player: Time for the quantom mathematics to arrise."
    }
    if(timer.gte(129)) {
        document.getElementById("Lore").textContent = "(IU player summons the weapons made of quantom)"
    }
    if(timer.gte(133)) {
        document.getElementById("Lore").textContent = "???: that weapon can only summon the chosen one from the entire omniverse"
    }
    if(timer.gte(138)) {
        document.getElementById("Lore").textContent = "tcct player: What would this fight be without me?"
    }
    if(timer.gte(142)) {
        document.getElementById("Lore").textContent = "???: Hevipelle... Come and show these BASTARTEDS WHAT YOU CAN DO!"
    }
    if(timer.gte(146)) {
        document.getElementById("Lore").textContent = "(Hevipelle comes and starts using the glyphs the only way they were intended)"
    }
    if(timer.gte(151)) {
        document.getElementById("Lore").textContent = "Hevipelle: Chlarinoum... show our enemies what you can do."
    }
    if(timer.gte(156)) {
        document.getElementById("Lore").textContent = "(Chlarinoum releases deadly gas and acid)"
    }
    if(timer.gte(160)) {
        document.getElementById("Lore").textContent = "tcct player: Didn't came prepared for nothing.."
    }
    if(timer.gte(164)) {
        document.getElementById("Lore").textContent = "(tcct player uses the clock stopping the time and changing Chlarinoum's attack to Hevipelle)"
    }
    if(timer.gte(170)) {
        document.getElementById("Lore").textContent = "Hevipelle: the magic from glyphs don't work on me.."
    }
    if(timer.gte(174)) {
        document.getElementById("Lore").textContent = "tcct player: I use a lot of my energy for this.. I-I.. ugh.."
    }
    if(timer.gte(179)) {
        document.getElementById("Lore").textContent = "IU player: You are going with me friend.. I'll be back hold him off a little more"
    }
    document.getElementById("Crafting-power").textContent = "You have " + formatWhole(player.Crafting_power) + " Crafting power"
    document.getElementById("Stone").textContent = formatWhole(player.Stone) + " Stone"
    document.getElementById("Wood").textContent = formatWhole(player.Wood) + " Wood"
    document.getElementById("Iron").textContent = formatWhole(player.Iron_ore) + " Iron ore"
    document.getElementById("Gold").textContent = formatWhole(player.Gold_ore) + " Gold ore"
    document.getElementById("Diamond").textContent = formatWhole(player.Diamond) + " Diamond"
    document.getElementById("Ruby").textContent = formatWhole(player.Ruby) + " Ruby"
    document.getElementById("Emerald").textContent = formatWhole(player.Emeralds) + " Emeralds"
    document.getElementById("Titanium").textContent = formatWhole(player.Titanium) + " Titanium"
    document.getElementById("Gain-Stone").textContent = "+" + formatWhole(player.Gain_Stone) + " Stone/click"
    document.getElementById("Gain-Wood").textContent = "+" + formatWhole(player.Gain_Wood) + " Wood/click"
    document.getElementById("Gain-Iron").textContent = "+" + formatWhole(player.Gain_Iron_ore) + " Iron ore/click"
    document.getElementById("Gain-Gold").textContent = "+" + formatWhole(player.Gain_Gold_ore) + " Gold ore/click"
    document.getElementById("Gain-Diamond").textContent = "+" + formatWhole(player.Gain_Diamond) + " Diamonds/click"
    document.getElementById("Gain-Ruby").textContent = "+" + formatWhole(player.Ruby_gain) + " Ruby/click"
    document.getElementById("Gain-Emerald").textContent = "+" + formatWhole(player.Emeralds_gain) + " Emeralds/click"
    document.getElementById("Gain-Titanium").textContent = "+" + formatWhole(player.Titanium_gain) + " Titanium/click"
    document.getElementById("Stone-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Stone_up1.cost)
    document.getElementById("Stone-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Stone_up2.cost)
    document.getElementById("Wood-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Wood_up1.cost)
    document.getElementById("Wood-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Wood_up2.cost)
    document.getElementById("Iron-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Iron_ore_up1.cost)
    document.getElementById("Iron-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Iron_ore_up2.cost)
    document.getElementById("Gold-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Gold_ore_up1.cost)
    document.getElementById("Gold-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Gold_ore_up2.cost)
    document.getElementById("Diamond-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Diamond_up1.cost)
    document.getElementById("Diamond-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Diamond_up2.cost)
    document.getElementById("Ruby-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Ruby_up1.cost)
    document.getElementById("Ruby-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Ruby_up2.cost)
    document.getElementById("Emerald-up1-cost").textContent = "Cost: " + formatWhole(Upgrades.Emerald_up1.cost)
    document.getElementById("Emerald-up2-cost").textContent = "Cost: " + formatWhole(Upgrades.Emerald_up2.cost)
    document.getElementById("Sticks").textContent = "You have " + formatWhole(player.Sticks) + " Sticks"
    document.getElementById("SmoothStone").textContent = "You have " + formatWhole(player.Smooth_Stone) + " Smooth Stone"
    document.getElementById("Iron2").textContent = "You have " + formatWhole(player.Iron) + " Iron"
    document.getElementById("Gold2").textContent = "You have " + formatWhole(player.Gold) + " Gold"
    document.getElementById("SmoothStone-timer").textContent = format(player.Smooth_Stone_timer) + "s"
    document.getElementById("Iron-timer").textContent = format(player.Iron_timer) + "s"
    document.getElementById("Gold-timer").textContent = format(player.Gold_timer) + "s"
    document.getElementById("Crafting-knowledge").textContent = "You have " + format(player.Crafting_knowledge) + " Crafting Knowledge"
    document.getElementById("Craftingk-persec").textContent = "(+" + format(player.Craftingk_persec) + "/sec)"
    if (player.Stone.gte(Upgrades.Stone_up1.cost)) {
        document.getElementById("Stone-up1").style.backgroundColor = "silver"
        document.getElementById("Stone-up1").style.cursor = "pointer"
    }
    if (player.Stone.lt(Upgrades.Stone_up1.cost)) {
        document.getElementById("Stone-up1").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Stone-up1").style.cursor = "default"
    }
    if (player.Stone.gte(Upgrades.Stone_up2.cost)) {
        document.getElementById("Stone-up2").style.backgroundColor = "silver"
        document.getElementById("Stone-up2").style.cursor = "pointer"
    }
    if (player.Stone.lt(Upgrades.Stone_up2.cost)) {
        document.getElementById("Stone-up2").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Stone-up2").style.cursor = "default"
    }
    if (player.Wood.gte(Upgrades.Wood_up1.cost)) {
        document.getElementById("Wood-up1").style.backgroundColor = "#A1662F"
        document.getElementById("Wood-up1").style.cursor = "pointer"
    }
    if (player.Wood.lt(Upgrades.Wood_up1.cost)) {
        document.getElementById("Wood-up1").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Wood-up1").style.cursor = "default"
    }
    if (player.Wood.gte(Upgrades.Wood_up2.cost)) {
        document.getElementById("Wood-up2").style.backgroundColor = "#A1662F"
        document.getElementById("Wood-up2").style.cursor = "pointer"
    }
    if (player.Wood.lt(Upgrades.Wood_up2.cost)) {
        document.getElementById("Wood-up2").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Wood-up2").style.cursor = "default"
    }
    if (player.Iron_ore.gte(Upgrades.Iron_ore_up1.cost)) {
        document.getElementById("Iron-up1").style.backgroundColor = "grey"
        document.getElementById("Iron-up1").style.cursor = "pointer"
    }
    if (player.Iron_ore.lt(Upgrades.Iron_ore_up1.cost)) {
        document.getElementById("Iron-up1").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Iron-up1").style.cursor = "default"
    }
    if (player.Iron_ore.gte(Upgrades.Iron_ore_up2.cost)) {
        document.getElementById("Stone-up2").style.backgroundColor = "grey"
        document.getElementById("Stone-up2").style.cursor = "pointer"
    }
    if (player.Iron_ore.lt(Upgrades.Iron_ore_up2.cost)) {
        document.getElementById("Iron-up2").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Iron-up2").style.cursor = "default"
    }
    if (player.Gold_ore.gte(Upgrades.Gold_ore_up1.cost)) {
        document.getElementById("Gold-up1").style.backgroundColor = "yellow"
        document.getElementById("Gold-up1").style.cursor = "pointer"
    }
    if (player.Gold_ore.lt(Upgrades.Gold_ore_up1.cost)) {
        document.getElementById("Gold-up1").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Gold-up1").style.cursor = "default"
    }
    if (player.Gold_ore.gte(Upgrades.Gold_ore_up2.cost)) {
        document.getElementById("Gold-up2").style.backgroundColor = "yellow"
        document.getElementById("Gold-up2").style.cursor = "pointer"
    }
    if (player.Gold_ore.lt(Upgrades.Gold_ore_up2.cost)) {
        document.getElementById("Gold-up2").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Gold-up2").style.cursor = "default"
    }
    if (player.Diamond.gte(Upgrades.Diamond_up1.cost)) {
        document.getElementById("Diamond-up1").style.backgroundColor = "#0233f5"
        document.getElementById("Diamond-up1").style.cursor = "pointer"
    }
    if (player.Diamond.lt(Upgrades.Diamond_up1.cost)) {
        document.getElementById("Diamond-up1").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Diamond-up1").style.cursor = "default"
    }
    if (player.Diamond.gte(Upgrades.Diamond_up2.cost)) {
        document.getElementById("Diamond-up2").style.backgroundColor = "#0233f5"
        document.getElementById("Diamond-up2").style.cursor = "pointer"
    }
    if (player.Diamond.lt(Upgrades.Diamond_up2.cost)) {
        document.getElementById("Diamond-up2").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Diamond-up2").style.cursor = "default"
    }
    if (player.Ruby.gte(Upgrades.Ruby_up1.cost)) {
        document.getElementById("Ruby-up1").style.backgroundColor = "#c40808"
        document.getElementById("Ruby-up1").style.cursor = "pointer"
    }
    if (player.Ruby.lt(Upgrades.Ruby_up1.cost)) {
        document.getElementById("Ruby-up1").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Ruby-up1").style.cursor = "default"
    }
    if (player.Ruby.gte(Upgrades.Ruby_up2.cost)) {
        document.getElementById("Ruby-up2").style.backgroundColor = "#c40808"
        document.getElementById("Ruby-up2").style.cursor = "pointer"
    }
    if (player.Ruby.lt(Upgrades.Ruby_up2.cost)) {
        document.getElementById("Ruby-up2").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Ruby-up2").style.cursor = "default"
    }
    if (player.Emeralds.gte(Upgrades.Emerald_up1.cost)) {
        document.getElementById("Emerald-up1").style.backgroundColor = "#50C878"
        document.getElementById("Emerald-up1").style.cursor = "pointer"
    }
    if (player.Emeralds.lt(Upgrades.Emerald_up1.cost)) {
        document.getElementById("Emerald-up1").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Emerald-up1").style.cursor = "default"
    }
    if (player.Emeralds.gte(Upgrades.Emerald_up2.cost)) {
        document.getElementById("Emerald-up2").style.backgroundColor = "#50C878"
        document.getElementById("Emerald-up2").style.cursor = "pointer"
    }
    if (player.Emeralds.lt(Upgrades.Emerald_up2.cost)) {
        document.getElementById("Emerald-up2").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Emerald-up2").style.cursor = "default"
    }
    if (player.Titanium.gte(Upgrades.Titanium_up1.cost)) {
        document.getElementById("Titanium-up1").style.backgroundColor = "#575353"
        document.getElementById("Titanium-up1").style.cursor = "pointer"
    }
    if (player.Titanium.lt(Upgrades.Titanium_up1.cost)) {
        document.getElementById("Titanium-up1").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Titanium-up1").style.cursor = "default"
    }
    if (player.Titanium.gte(Upgrades.Titanium_up2.cost)) {
        document.getElementById("Titanium-up2").style.backgroundColor = "#575353"
        document.getElementById("Titanium-up2").style.cursor = "pointer"
    }
    if (player.Titanium.lt(Upgrades.Titanium_up2.cost)) {
        document.getElementById("Titanium-up2").style.backgroundColor = "rgb(44,44,44)"
        document.getElementById("Titanium-up2").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up1.bought === true) {
        document.getElementById("Craft1").style.background = "green"
        document.getElementById("Craft1").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up2.bought === true) {
        document.getElementById("Craft2").style.background = "green"
        document.getElementById("Craft2").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up3.bought === true) {
        document.getElementById("Craft3").style.background = "green"
        document.getElementById("Craft3").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up4.bought === true) {
        document.getElementById("Craft4").style.background = "green"
        document.getElementById("Craft4").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up5.bought === true) {
        document.getElementById("Craft5").style.background = "green"
        document.getElementById("Craft5").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up6.bought === true) {
        document.getElementById("Craft6").style.background = "green"
        document.getElementById("Craft6").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up7.bought === true) {
        document.getElementById("Craft7").style.background = "green"
        document.getElementById("Craft7").style.cursor = "default"
    }
    if (Craft_Upgrades.Craft_up8.bought === true) {
        document.getElementById("Craft8").style.background = "green"
        document.getElementById("Craft8").style.cursor = "default"
    }
    if (player.Stone.eq(0) && player.Wood.eq(0) && player.Crafting_knowledge.lt(200)) {
        document.getElementById("Milestone1").style.backgroundColor = "rgb(5, 167, 167)"
    }
    if (player.Crafting_knowledge.gte(200) && player.Stone.eq(0) && player.Wood.eq(0)) {
        ProgressionMilestonesContent.Milestone1.Completed = true
    }
    if (ProgressionMilestonesContent.Milestone1.Completed === true) {
        document.getElementById("Milestone1").style.backgroundColor = "#3fe83f"
        document.getElementById("Milestone1-Reached").textContent = "[Completed]"
    }
    if (player.Crafting_knowledge.lt(200) && player.Stone.gt(0) && player.Wood.gt(0)) {
        document.getElementById("Milestone1").style.backgroundColor = "#474a47"
        document.getElementById("Milestone1-Reached").textContent = "[Failed]"
    }
    if (player.Crafting_knowledge.lt(10000) && UsageOfUpgrades.eq(0)) {
        document.getElementById("Milestone2").style.backgroundColor = "rgb(5, 167, 167)"
    }
    if (player.Crafting_knowledge.gte(10000) && UsageOfUpgrades.eq(0)) {
        ProgressionMilestonesContent.Milestone2.Completed = true
    }
    if (ProgressionMilestonesContent.Milestone2.Completed === true) {
        document.getElementById("Milestone2").style.backgroundColor = "#3fe83f"
        document.getElementById("Milestone2-Reached").textContent = "[Completed]"
    }
    if (player.Crafting_knowledge.lt(10000) && UsageOfUpgrades.gt(0)) {
        document.getElementById("Milestone2").style.backgroundColor = "#474a47"
        document.getElementById("Milestone2-Reached").textContent = "[Failed]"
    }
    if (Craft_Upgrades.Craft_up7.bought === false && Experience.DidAReset === false) {
        document.getElementById("Milestone3").style.backgroundColor = "rgb(5, 167, 167)"
    } 
    if (Craft_Upgrades.Craft_up7.bought === false && Experience.DidAReset === true) {
        ProgressionMilestonesContent.Milestone3.Completed = true
    }
    if (ProgressionMilestonesContent.Milestone3.Completed === true) {
        document.getElementById("Milestone3").style.backgroundColor = "#3fe83f"
        document.getElementById("Milestone3-Reached").textContent = "[Completed]"
    }
    if (Craft_Upgrades.Craft_up7.bought === true && Experience.DidAReset === false) {
        document.getElementById("Milestone3").style.backgroundColor = "#474a47"
        document.getElementById("Milestone3-Reached").textContent = "[Failed]"
    }
    player.Stone = player.Stone.add(player.Stone_perSec.div(20))
    player.Wood = player.Wood.add(player.Wood_perSec.div(20))
    player.Iron_ore = player.Iron_ore.add(player.Iron_perSec.div(20))
    player.Gold_ore = player.Gold_ore.add(player.Gold_preSec.div(20))
    player.Diamond = player.Diamond.add(player.Diamonds_perSec.div(20))
    player.Ruby = player.Ruby.add(player.Ruby_persec.div(20))
    player.Emeralds = player.Emeralds.add(player.Emeralds_persec.div(20))
    player.Titanium = player.Titanium.add(player.Titanium_persec.div(20))
    player.Crafting_knowledge = player.Crafting_knowledge.add(player.Craftingk_persec.div(20))
    player.Crafting_power = player.Crafting_power.add(player.Crafting_power_persec.div(20))
    if (SmoothStoneOn === true) {
        player.Smooth_Stone_timer = player.Smooth_Stone_timer.sub(new Decimal(1).div(20))
    }
    if (SmoothStoneOff === true) {
        player.Smooth_Stone_timer = player.Smooth_Stone_timer.sub(0)
    }
    if (player.Smooth_Stone_timer.lte(1)) {
        if(DecreasedTimeSum.lte(0)) {
            player.Smooth_Stone_timer = new Decimal(5)
        }
        else if(DecreasedTimeSum.gt(1)) {
            player.Smooth_Stone_timer = new Decimal(5).div(DecreasedTimeSum)
        }
        if (ProgressionMilestonesContent.Milestone3.Completed === true) {
            player.Smooth_Stone_timer = player.Smooth_Stone_timer.sub(2)
        }
        if (player.Stone.gte(1)) {
            player.Stone = player.Stone.sub(1)
            player.Smooth_Stone = player.Smooth_Stone.add(1)
        }
    }
    if (IronOn === true) {
        player.Iron_timer = player.Iron_timer.sub(new Decimal(1).div(20))
    }
    if (IronOff === true) {
        player.Iron_timer = player.Iron_timer.sub(0)
    }
    if (player.Iron_timer.lte(0)) {
        if(DecreasedTimeSum.lte(1)) {
            player.Iron_timer = new Decimal(15)
        }
        else if(DecreasedTimeSum.gt(1)) {
            player.Iron_timer = new Decimal(15).div(DecreasedTimeSum)
        }
        if (ProgressionMilestonesContent.Milestone3.Completed === true) {
            player.Iron_timer = player.Iron_timer.sub(2)
        }
        if (player.Iron_ore.gte(1)) {
            player.Iron_ore = player.Iron_ore.sub(1)
            player.Iron = player.Iron.add(1)
        }
    }
    if (GoldOn === true) {
        player.Gold_timer = player.Gold_timer.sub(new Decimal(1).div(20))
    }
    if (GoldOff === true) {
        player.Gold_timer = player.Gold_timer.sub(0)
    }
    if (player.Gold_timer.lte(0)) {
        if(DecreasedTimeSum.lte(1)) {
            player.Gold_timer = new Decimal(30)
        }
        else if(DecreasedTimeSum.gt(1)) {
            player.Gold_timer = new Decimal(30).div(DecreasedTimeSum)
        }
        if (ProgressionMilestonesContent.Milestone3.Completed === true) {
            player.Gold_timer = player.Gold_timer.sub(2)
        }
        if (player.Gold_ore.gte(1)) {
            player.Gold_ore = player.Gold_ore.sub(1)
            player.Gold = player.Gold.add(1)
        }
    }
    if (PowerSourceOn === true) {
       if (player.Stone.lte(0) || player.Wood.lte(0)) {
        PowerSourceOn = false
       }
       else {
        player.Stone = player.Stone.sub(new Decimal(1).div(20))
        player.Wood = player.Wood.sub(new Decimal(1).div(20))
        if(ProgressionMilestonesContent.Milestone2.Completed === false) {
            player.Crafting_power_persec = new Decimal(0.1)
        }
        else if(ProgressionMilestonesContent.Milestone2.Completed === true) {
            player.Crafting_power_persec = new Decimal(1)
        }
        document.getElementById("Craftk-up1").style.backgroundColor = "limegreen"
       }
    }
    if (PowerSourceOn === false) {
        player.Crafting_power_persec = new Decimal(0)
        document.getElementById("Craftk-up1").style.backgroundColor = "#787366"
    }
    if (NoTimewallOn === true) {
        if (player.Iron_ore.lte(0) || player.Gold_ore.lte(0) || player.Stone.lte(0)) {
            NoTimewallOn = false
        }
        else {
            player.Stone = player.Stone.sub(new Decimal(1).div(20))
            player.Iron_ore = player.Iron_ore.sub(new Decimal(1).div(20))
            player.Gold_ore = player.Gold_ore.sub(new Decimal(1).div(20))
            DecreasedTimeSum = (player.Smooth_Stone.div(250)).pow(0.5).add((player.Iron_ore.mul(player.Gold_ore)).div(1000)).pow(0.85)
            document.getElementById("Craftk-up2").style.backgroundColor = "limegreen"
        }
    }
    if (NoTimewallOn === false) {
        DecreasedTimeSum = new Decimal(0)
        document.getElementById("Craftk-up2").style.backgroundColor = "#787366"
    }
    if (ExperiencedCrafterOn === true) {
        if(player.Stone.lte(0) || player.Wood.lte(0) || player.Gold_ore.lte(0) || player.Gold.lte(0) || player.Iron_ore.lte(0) || player.Iron.lte(0) || player.Diamond.lte(0) || player.Ruby.lte(0) || player.Emeralds.lte(0)) {
            ExperiencedCrafterOn = false
        }
        else {
            player.Stone = player.Stone.sub(new Decimal(10).div(20))
            player.Wood = player.Wood.sub(new Decimal(10).div(20))
            player.Iron_ore = player.Iron_ore.sub(new Decimal(10).div(20))
            player.Iron = player.Iron.sub(new Decimal(10).div(20))
            player.Gold_ore = player.Gold_ore.sub(new Decimal(10).div(20))
            player.Gold = player.Gold.sub(new Decimal(10).div(20))
            player.Diamond = player.Diamond.sub(new Decimal(10).div(20))
            player.Ruby = player.Ruby.sub(new Decimal(10).div(20))
            player.Emeralds = player.Emeralds.sub(new Decimal(10).div(20))
            document.getElementById("Materials-to-Craftingk").innerHTML = "Convert Stone, Wood, Iron and Gold into Crafting Knowledge.<br> base Gain: ((Stone/100 + Wood/250)^0.7) + ((Iron^0.6 x Gold^0.55) / 150)"
            document.getElementById("Craftk-up3").style.backgroundColor = "limegreen"
        }
    }
    if (ExperiencedCrafterOn === false) {
        document.getElementById("Craftk-up3").style.backgroundColor = "#787366"
    }
    if (Experience.DidAReset === true) {
        Experience.DidAReset = false
    }
    if (ClassContent.level === 2) {
        document.getElementById("Class").textContent = "You are a Beginner"
        document.getElementById("Class-benefits").textContent = "As a Beginner you get 2x more Materials per click"
        document.getElementById("Class-upgrade").innerHTML = "Upgrade to Rookie<br> Cost: 50,000 Stone; 75,000 Wood; 5,000 Iron; 3,000 Gold; 15,000 Diamonds; 1,000 Ruby; 1,000 Emeralds; 500 Titanium; 10,000 Experience"
        player.Gain_Stone = player.Gain_Stone.mul(2)
        player.Gain_Wood = player.Gain_Wood.mul(2)
        player.Gain_Iron_ore = player.Gain_Iron_ore.mul(2)
        player.Gain_Gold_ore = player.Gain_Gold_ore.mul(2)
        player.Gain_Diamond = player.Gain_Diamond.mul(2)
        player.Ruby_gain = player.Ruby_gain.mul(2)
        player.Emeralds_gain = player.Emeralds_gain.mul(2)
        player.Titanium_gain = player.Titanium_gain.mul(2)
    }
    if (ClassContent.level === 3) {
        document.getElementById("Class").textContent = "You are a Rookie"
        document.getElementById("Class-benefits").textContent = "As a Rookie you get 5x more Materials per click; 1.5x more hp and atk; 1.1x more mana"
        document.getElementById("Class-upgrade").innerHTML = "Upgrade to Advanced<br> Cost: infinity"
        player.Gain_Stone = player.Gain_Stone.mul(5)
        player.Gain_Wood = player.Gain_Wood.mul(5)
        player.Gain_Iron_ore = player.Gain_Iron_ore.mul(5)
        player.Gain_Gold_ore = player.Gain_Gold_ore.mul(5)
        player.Gain_Diamond = player.Gain_Diamond.mul(5)
        player.Ruby_gain = player.Ruby_gain.mul(5)
        player.Emeralds_gain = player.Emeralds_gain.mul(5)
        player.Titanium_gain = player.Titanium_gain.mul(5)
    }
}

setInterval(Gameloop, 1000/20)