**Input default example**
```example
<BaseInput id="firstName" labelText="First Name" onValueChange={(e)=>{}}/>
```

**BaseInput Password example**
```example
<BaseInput id="password" labelText="Password" type="password" onValueChange={(e)=>{}}/>
```

 **Radio default example**
```example
let options = [{value:'male', text:'Male'},{value:'female', text:'Female'},{value:'dontSpecify', text:"I Don't want to say"}];
<BaseInput labelText="Select Gender" type="radio"
 radioGroupName="gender"
 radioOptions={options}
 defaultValue="male"
  onValueChange={(e)=>{}}/>
```
**Checkbox default example**
```example
<BaseInput labelText="I Agree terms" onValueChange={(e)=>{}} type="checkbox"/>
```
