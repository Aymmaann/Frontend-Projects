let totalScore = 0
fetch('data.json')
    .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const section = document.querySelector(`.stat-section.${item.category.toLowerCase()}`)
                if(section){
                    const scoreElement = document.querySelector(`.${item.category.toLowerCase()}-score`)
                    if(scoreElement){
                        scoreElement.innerText = item.score
                        totalScore += item.score
                    }
                }
            })
            const resultScore = document.querySelector(".final-score")
            resultScore.innerText = Math.floor(totalScore/4)

            const result = document.querySelector('.result-text')
            const resultPercent = document.querySelector('.result-percent')
            if(resultScore.innerText >= 75){
                result.innerText = "Great"
                resultPercent.innerText = "65%"
            }
            else if(resultScore.innerText >= 50){
                result.innerText = "Average"
                resultPercent.innerText = "42%"
            }
            else{
                result.innerText = "Poor"
                resultPercent.innerText = "34%"
            }
        })
        .catch(error => console.error('Error fetching data: ', err))