import React,{useState} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'
function ParentComponent() {
const [age,setAge]=useState(25)
const [salary,setSalary]=useState(50000)

const incrementAge=()=>{
setAge(age+1)
}

const incrementSalary=()=>{
    setSalary(salary+1)
}

  return (
    <div>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick={incrementAge}>IncrementAge</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={incrementSalary}>incrementSalary</Button>
    </div>
  )
}

export default ParentComponent