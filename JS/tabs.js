let Materials_content = document.getElementById("Materials-content")
let Crafting_content = document.getElementById("Crafting-content")
let Experience_content = document.getElementById("Experience-content")
let Ranking_content = document.getElementById("Ranking-content")
let Progression_milestones_content = document.getElementById("Progression-Milestones-content")
let Exploration_content = document.getElementById("Exploration-content")

function OpenMaterialsContent() {
    Materials_content.classList.add("show")
    Crafting_content.classList.remove("show-Crafting-content")
    Experience_content.classList.remove("show-Experience-content")
    Ranking_content.classList.remove("show-Ranking-content")
    Progression_milestones_content.classList.remove("show-Progression-Milestones-content")
    Exploration_content.classList.remove("show-Exploration-content")
}

function OpenCraftingContent() {
    Crafting_content.classList.add("show-Crafting-content")
    Materials_content.classList.remove("show")
    Experience_content.classList.remove("show-Experience-content")
    Ranking_content.classList.remove("show-Ranking-content")
    Progression_milestones_content.classList.remove("show-Progression-Milestones-content")
    Exploration_content.classList.remove("show-Exploration-content")
}

function OpenExperienceContent() {
    Experience_content.classList.add("show-Experience-content")
    Crafting_content.classList.remove("show-Crafting-content")
    Materials_content.classList.remove("show")
}

function OpenRankingContent() {
    Ranking_content.classList.add("show-Ranking-content")
    Progression_milestones_content.classList.remove("show-Progression-Milestones-content")
    Exploration_content.classList.remove("show-Exploration-content")
}

function OpenProgressionMilestonesContent() {
    Progression_milestones_content.classList.add("show-Progression-Milestones-content")
    Ranking_content.classList.remove("show-Ranking-content")
    Exploration_content.classList.remove("show-Exploration-content")
}

function OpenExplorationContent() {
    Exploration_content.classList.add("show-Exploration-content")
    Ranking_content.classList.remove("show-Ranking-content")
    Progression_milestones_content.classList.remove("show-Progression-Milestones-content")
}