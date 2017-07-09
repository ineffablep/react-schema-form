**Input default example**
```example
<Input id="firstName" labelText="First Name" onValueChange={(e)=>{}}/>
```

**Input Password example**
```example
<Input id="password" labelText="Password" type="password" onValueChange={(e)=>{}}/>
```

**Input Validation example**
```example
let validateRules= [
          {
            rule: "required",
            message: "Phone number or Email address is required"
          }
        ];
<Input id="userName" labelText="User Name" validateRules={validateRules}  onValueChange={(e)=>{}}/>
```

**Input Custom Input Class - Border example**
```example
<Input id="borderInput" labelText="Border Input" inputClass="w3-border"  onValueChange={(e)=>{}}/>
```

**Input Custom Input Style  example**
```example
let inputStyle ={backgroundColor:'red'};
<Input id="inputStyle" labelText="Input Style" inputStyle= {inputStyle} onValueChange={(e)=>{}}/>
```

**Input Custom Label Class  example**
```example
<Input id="labelClass" labelText="Label Class" labelClass="w3-text-red"  onValueChange={(e)=>{}}/>
```

**Input Custom Label Style  example**
```example
let labelStyle ={color:'green'};
<Input id="labelStyle" labelText="Label Style" labelStyle={labelStyle}  onValueChange={(e)=>{}}/>
```

