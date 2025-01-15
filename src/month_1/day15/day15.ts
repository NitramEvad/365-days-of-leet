export function beasts (heads:number, tails:number):number[] | string {
    const beastHeads = {orthus: 2, hydra: 5, }
    const beastTails = {orthus: 1, hydra: 1, }

    const orthusCount = ((tails * beastHeads.hydra) - heads) / 3
    const hydraCount = (heads - (tails * beastHeads.orthus)) / 3

    if (!Number.isInteger(orthusCount) || !Number.isInteger(hydraCount) || orthusCount < 0 ||  hydraCount < 0) return "No solutions"
    return [orthusCount,hydraCount]
}