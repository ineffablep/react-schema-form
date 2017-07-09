 **Radio default example**
```example
let options = [{value:'male', text:'Male'},{value:'female', text:'Female'},{value:'dontSpecify', text:"I Don't want to say"}];
<Radio labelText="Select Gender"
 radioGroupName="gender"
 radioOptions={options}
 defaultValue="male"
  onValueChange={(e)=>{}}/>
```

 **Radio iOS default example**
```example
let options = [{value:'male', text:'Male'},{value:'female', text:'Female'},{value:'dontSpecify', text:"I Don't want to say"}];
<Radio labelText="Select Gender"
 radioGroupName="iosGender"
 radioOptions={options}
 defaultValue="male"
 theme="ios"
  onValueChange={(e)=>{}}/>
```

 **Radio windows example**
```example
let options = [{value:'male', text:'Male'},{value:'female', text:'Female'},{value:'dontSpecify', text:"I Don't want to say"}];
<Radio labelText="Select Gender"
 radioGroupName="winGender"
 radioOptions={options}
 theme="win"
 defaultValue="male"
  onValueChange={(e)=>{}}/>
```