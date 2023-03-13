import {accounts} from '/data.js'

const accountsEl = document.getElementById('accounts-el')
const spendingsEl = document.getElementById('spendings-el')
const homeBtn = document.getElementById('home-btn')
const accountsBtn = document.getElementById('accounts-btn')

accountsBtn.addEventListener('click', function(){
    document.getElementById('accounts-container').classList.remove('hidden')
    document.getElementById('welcome-message').classList.add('hidden')
    renderAccounts()
})

homeBtn.addEventListener('click', function(){
    document.getElementById('spendings-container').classList.add('hidden')
    document.getElementById('accounts-container').classList.add('hidden')
})



function renderAccounts(){
    let accountsHtml = ""
    
    for (const account of accounts){
        accountsHtml += `
    <div class="accounts-inner">
        <p>${account.title}</p>
        <p>£${account.balance}</p>
    </div>`
    }
    
    accountsEl.innerHTML = accountsHtml
    
    const accountsInner = document.getElementsByClassName('accounts-inner')
    for (let i = 0; i < accountsInner.length; i++){
        accountsInner[i].addEventListener('click', function(){
            document.getElementById('spendings-container').classList.remove('hidden')
            renderSpendings(accounts[i].spendings)
        })
    }
}


function renderSpendings(spendings){
    
    let spendingsHtml = ""
    
        for (let spending of spendings){
            spendingsHtml += `
            <div>
            <div class="spendings-inner" style="--width:90%">
                <div class="spendings-individual">
                    <p>${spending.category}</p>
                    <p>£${spending.spent}</p>
                </div>
            <div>
            </div>
    `
        }
        spendingsEl.innerHTML = spendingsHtml
    }
    
    
