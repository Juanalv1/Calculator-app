const switchCont = document.querySelector('#switch-cont')
const switchHandle = document.querySelector('#switch-handle')

const body = document.querySelector('body')
const section = document.querySelector('section')
const screen = document.querySelector('#screen')
const keyBoard = document.querySelector('#key-container')
const calcKey = document.querySelectorAll('.calc-key')
const delKey = document.querySelector('#del-key')
const resetKey = document.querySelector('#reset-key')
const resultKey = document.querySelector('#result-key')
const resultSpan = document.querySelector('#result-span')
let firstEntry = ''
let secondEntry = ''
let firstEntryNum = ''
let secondEntryNum = ''
let OperatorEntry = ''
let operationResult = NaN

const entry7=document.querySelector('#entry-7').addEventListener('click', () => {
  if (OperatorEntry === '') {
    firstEntry = firstEntry + 7
    resultSpan.textContent = firstEntry
} else if(OperatorEntry != undefined){
    secondEntry = secondEntry + 7
    resultSpan.textContent = secondEntry
}
})
const entry8=document.querySelector('#entry-8').addEventListener('click', () => {
  if (OperatorEntry === '') {
    firstEntry = firstEntry + 8
    resultSpan.textContent = firstEntry
} else if(OperatorEntry != undefined){
    secondEntry = secondEntry + 8
    resultSpan.textContent = secondEntry
}
})
const entry9=document.querySelector('#entry-9').addEventListener('click', () => {
  if (OperatorEntry === '') {
    firstEntry = firstEntry + 9
    resultSpan.textContent = firstEntry
} else if(OperatorEntry != undefined){
    secondEntry = secondEntry + 9
    resultSpan.textContent = secondEntry
}
})
const entry4=document.querySelector('#entry-4').addEventListener('click', () => {
  
      if (OperatorEntry === '') {
        firstEntry = firstEntry + 4
        resultSpan.textContent = firstEntry
    } else if(OperatorEntry != undefined){
        secondEntry = secondEntry + 4
        resultSpan.textContent = secondEntry
    }
  
  
})
const entry5=document.querySelector('#entry-5').addEventListener('click', () => {
  if (OperatorEntry === '') {
    firstEntry = firstEntry + 5
    resultSpan.textContent = firstEntry
} else if(OperatorEntry != undefined){
    secondEntry = secondEntry + 5
    resultSpan.textContent = secondEntry
}
})
const entry6=document.querySelector('#entry-6').addEventListener('click', () => {
  if (OperatorEntry === '') {
    firstEntry = firstEntry + 6
    resultSpan.textContent = firstEntry
} else if(OperatorEntry != undefined){
    secondEntry = secondEntry + 6
    resultSpan.textContent = secondEntry
}
})
const entry1=document.querySelector('#entry-1').addEventListener('click', () => {
  if (OperatorEntry === '') {
    firstEntry = firstEntry + 1
    resultSpan.textContent = firstEntry
} else if(OperatorEntry != undefined){
    secondEntry = secondEntry + 1
    resultSpan.textContent = secondEntry
}
})
const entry2=document.querySelector('#entry-2').addEventListener('click', () => {
  if (OperatorEntry === '') {
    firstEntry = firstEntry + 2
    resultSpan.textContent = firstEntry
} else if(OperatorEntry != undefined){
    secondEntry = secondEntry + 2
    resultSpan.textContent = secondEntry
}
})
const entry3=document.querySelector('#entry-3').addEventListener('click', () => {
  if (OperatorEntry === '') {
    firstEntry = firstEntry + 3
    resultSpan.textContent = firstEntry

} else if(OperatorEntry != undefined){
    secondEntry = secondEntry + 3
    resultSpan.textContent = secondEntry
}
})
const entry0=document.querySelector('#entry-0').addEventListener('click', () => {
  if (OperatorEntry === '') {
    firstEntry = firstEntry + 0
    resultSpan.textContent = firstEntry
} else if(OperatorEntry != undefined){
    secondEntry = secondEntry + 0
    resultSpan.textContent = secondEntry
}
})
const entryDot=document.querySelector('#entry-dot').addEventListener('click', () => {
  if (OperatorEntry === '') {
    firstEntry = firstEntry + '.'
    resultSpan.textContent = firstEntry
} else if(OperatorEntry != undefined){
    secondEntry = secondEntry + '.'
    resultSpan.textContent = secondEntry    
}
})
const entrySlash=document.querySelector('#entry-slash').addEventListener('click', () =>{
  OperatorEntry = 'div'
  resultSpan.textContent = '/'
  if (!isNaN(operationResult)) {
    
    firstEntry = operationResult + ""
  }
})
const entryX=document.querySelector('#entry-x').addEventListener('click', () => {
  OperatorEntry = 'mult'
  resultSpan.textContent = '*'
  if (!isNaN(operationResult)) {
    
    firstEntry = operationResult + ""
  } 
})
const entrySum=document.querySelector('#entry-sum').
addEventListener('click', () =>{
  OperatorEntry = 'sum'
  resultSpan.textContent = '+' 
  if (!isNaN(operationResult)) {
    
    firstEntry = operationResult + ""
  }
})
const entryRest=document.querySelector('#entry-rest').
addEventListener('click', () =>{
  OperatorEntry = 'rest'
  resultSpan.textContent = '-'
  if (!isNaN(operationResult)) {
    
    firstEntry = operationResult + ""
  }
})
resultKey.addEventListener('click', () => {
  firstEntryNum = parseFloat(firstEntry)
  secondEntryNum = parseFloat(secondEntry)
  if (firstEntry.length > 0 && secondEntry.length > 0 && OperatorEntry.length > 0) {
    if (OperatorEntry == 'sum') {
       operationResult = firstEntryNum + secondEntryNum
    }
   else if (OperatorEntry == 'rest') {
       operationResult = firstEntryNum - secondEntryNum
    }
    else if (OperatorEntry == 'mult') {
       operationResult = firstEntryNum * secondEntryNum
    }
    else if (OperatorEntry == 'div') {
       operationResult = firstEntryNum / secondEntryNum
    }
    resultSpan.textContent = operationResult
    firstEntry = ''
    secondEntry = ''
    OperatorEntry = ''
    
  }
})
delKey.addEventListener('click', () => {
  if (OperatorEntry === '') {
  firstEntry = ''
    resultSpan.textContent = firstEntry  
  } else if (OperatorEntry.length > 0){
  secondEntry = ''
    resultSpan.textContent = secondEntry  
  }

})
resetKey.addEventListener('click', () => {
  firstEntry = ''
  secondEntry = ''
  OperatorEntry = ''
  operationResult = NaN
  resultSpan.textContent = ''
})




switchHandle.addEventListener('click', () => {
  switch (true) {
    case switchCont.classList.contains('justify-start'):
      switchCont.classList.toggle('justify-start');
      switchCont.classList.toggle('justify-center');
      body.classList.toggle('bg-t1-main-background')
      body.classList.toggle('bg-t2-main-background')
      section.classList.toggle('text-white')
      section.classList.toggle('text-t2-text')
      switchCont.classList.toggle('bg-t1-toggle-background')
      switchCont.classList.toggle('bg-t2-toggle-background')
      switchHandle.classList.toggle('bg-t1-key-background-toggle')
      switchHandle.classList.toggle('bg-t2-key-background-toggle')
      screen.classList.toggle('bg-t1-screen-background')
      screen.classList.toggle('bg-t2-screen-background')
      keyBoard.classList.toggle('bg-t1-toggle-background')
      keyBoard.classList.toggle('bg-t2-toggle-background')
      calcKey.forEach(key => {
        key.classList.toggle('text-t1-Text')
      key.classList.toggle('text-t2-text')
      key.classList.toggle('shadow-t1-key-shadow-3')
      key.classList.toggle('shadow-t2-key-shadow-3')
      });
      delKey.classList.toggle('bg-t1-key-background')
      delKey.classList.toggle('bg-t2-key-background')
      delKey.classList.toggle('shadow-t1-key-shadow')
      delKey.classList.toggle('shadow-t2-key-shadow')
      resetKey.classList.toggle('bg-t1-key-background')
      resetKey.classList.toggle('bg-t2-key-background')
      resetKey.classList.toggle('shadow-t1-key-shadow')
      resetKey.classList.toggle('shadow-t2-key-shadow')
      
      resultKey.classList.toggle('bg-t1-key-background-toggle')
      resultKey.classList.toggle('bg-t2-key-background-toggle')
      resultKey.classList.toggle('shadow-t1-key-shadow-2')
      resultKey.classList.toggle('shadow-t2-key-shadow-2')
      
      
      break;
    case switchCont.classList.contains('justify-center'):
      switchCont.classList.toggle('justify-center');
      switchCont.classList.toggle('justify-end');
      body.classList.toggle('bg-t2-main-background')
      body.classList.toggle('bg-t3-main-background')
      section.classList.toggle('text-t2-text')
      section.classList.toggle('text-t3-text-yellow')
      switchCont.classList.toggle('bg-t2-toggle-background')
      switchCont.classList.toggle('bg-t3-toggle-background')
      switchHandle.classList.toggle('bg-t2-key-background-toggle')
      switchHandle.classList.toggle('bg-t3-key-background-toggle')
      screen.classList.toggle('bg-t2-screen-background')
      screen.classList.toggle('bg-t3-toggle-background')
      keyBoard.classList.toggle('bg-t2-toggle-background')
      keyBoard.classList.toggle('bg-t3-toggle-background')
      calcKey.forEach(key => {
        key.classList.toggle('bg-White')
        key.classList.toggle('bg-t3-key-background-2')
        key.classList.toggle('text-t2-text')
        key.classList.toggle('text-t3-text-yellow')
        key.classList.toggle('shadow-t2-key-shadow-3')
        key.classList.toggle('shadow-t3-key-shadow-3')
      });
      delKey.classList.toggle('bg-t2-key-background')
      delKey.classList.toggle('bg-t3-key-background')
      delKey.classList.toggle('shadow-t2-key-shadow')
      delKey.classList.toggle('shadow-t3-key-shadow')
      resetKey.classList.toggle('bg-t2-key-background')
      resetKey.classList.toggle('bg-t3-key-background')
      resetKey.classList.toggle('shadow-t2-key-shadow')
      resetKey.classList.toggle('shadow-t3-key-shadow')
      
      resultKey.classList.toggle('bg-t2-key-background-toggle')
      resultKey.classList.toggle('bg-t3-key-background-toggle')
      resultKey.classList.toggle('shadow-t2-key-shadow-2')
      resultKey.classList.toggle('shadow-t3-key-shadow-2')
      
      
      break;
    case switchCont.classList.contains('justify-end'):
      switchCont.classList.toggle('justify-end');
      switchCont.classList.toggle('justify-start');
      body.classList.toggle('bg-t3-main-background')
      body.classList.toggle('bg-t1-main-background')
      
      switchCont.classList.toggle('bg-t3-toggle-background')
      switchCont.classList.toggle('bg-t1-toggle-background')
      switchHandle.classList.toggle('bg-t3-key-background-toggle')
      switchHandle.classList.toggle('bg-t1-key-background-toggle')
      screen.classList.toggle('bg-t3-screen-background')
      screen.classList.toggle('bg-t1-toggle-background')
      keyBoard.classList.toggle('bg-t3-toggle-background')
      keyBoard.classList.toggle('bg-t1-toggle-background')
      calcKey.forEach(key => {
        key.classList.toggle('bg-t3-key-background-2')
        key.classList.toggle('bg-White')
        key.classList.toggle('text-t3-text-yellow')
        key.classList.toggle('text-t1-Text')
        
        key.classList.toggle('shadow-t3-key-shadow-3')
        key.classList.toggle('shadow-t1-key-shadow-3')
      });
      section.classList.toggle('text-t3-text-yellow')
      section.classList.toggle('text-t1-White')
      delKey.classList.toggle('bg-t3-key-background')
      delKey.classList.toggle('bg-t1-key-background')
      delKey.classList.toggle('shadow-t3-key-shadow')
      delKey.classList.toggle('shadow-t1-key-shadow')
      resetKey.classList.toggle('bg-t3-key-background')
      resetKey.classList.toggle('bg-t1-key-background')
      resetKey.classList.toggle('shadow-t3-key-shadow')
      resetKey.classList.toggle('shadow-t1-key-shadow')
      
      resultKey.classList.toggle('bg-t3-key-background-toggle')
      resultKey.classList.toggle('bg-t1-key-background-toggle')
      resultKey.classList.toggle('shadow-t3-key-shadow-2')
      resultKey.classList.toggle('shadow-t1-key-shadow-2')
     
      break;
    default:
      alert('a');
  }
});