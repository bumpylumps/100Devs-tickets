
document.getElementById('monsterButton').addEventListener('click', getFetchMonster)
document.getElementById('spellButton').addEventListener('click', getFetchSpell)

function getFetchMonster(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://www.dnd5eapi.co/api/monsters/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data.name
        document.querySelector('h3').innerText = `${data.alignment} / XP: ${data.xp}`
        document.querySelector('p').innerText = `AC/HP - ${data.armor_class} / ${data.hit_points} \n`
        document.querySelector('p').innerText += `STR - ${data.strength} \n`
        document.querySelector('p').innerText += `DEX - ${data.dexterity} \n`
        document.querySelector('p').innerText += `CONS - ${data.constitution} \n`
        document.querySelector('p').innerText += `INT - ${data.intelligence} \n`
        document.querySelector('p').innerText += `WIS - ${data.wisdom} \n`
        document.querySelector('p').innerText += `CHA- ${data.charisma} \n`
        document.querySelector('p').innerText += `Proficiencies - ${data.proficiencies[0].proficiency.name} \n`
        document.querySelector('p').innerText += `Special Abilities - ${data.special_abilities[0].name}: ${data.special_abilities[0].desc} \n`
        document.querySelector('p').innerText += `Actions- ${data.actions[0].name}: ${data.actions[0].desc} / ${data.actions[1].name}: ${data.actions[1].desc}  \n`
        



        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getFetchSpell(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://www.dnd5eapi.co/api/spells/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data.name

        document.querySelector('h3').innerText = `Range: ${data.range}`
        if(data.damage !== undefined){
        document.querySelector('h4').innerText = `Damage lvl 1: ${data.damage.damage_at_slot_level[1]} ${data.damage.damage_type.name} \n`
        }
        document.querySelector('p').innerText = data.desc
        
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}