export const increment = () => {
    try {
        return {
            type: 'COUNTER_INCREMENT'
        }
    } catch (e) {
        console.log(e)
    }
  }
  
  export const decrement = () => {
    try {
        return {
            type: 'COUNTER_DECREMENT'
        }
    } catch (e) {
        console.log(e)
    }
  }