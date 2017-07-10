**Select default example**
```example
let options = [{value:'admin' , text:'Admin'}, {value:'support', text:'Support'}];
<Select id="role" labelText="Select Role" options={options} onValueChange={(e)=>{}}/>
```

**Select with options url example**
```example
<Select id="role" labelText="Select Role" optionsUrl={"http://google.com"} onValueChange={(e)=>{}}/>
```

**Select selected Value example**
```example
let options = [{value:'admin' , text:'Admin'}, {value:'support', text:'Support'}];
<Select id="role" labelText="Select Role" selectedValue='support'  options={options} onValueChange={(e)=>{}}/>
```

**Select placeholder example**
```example
let options = [{value:'admin' , text:'Admin'}, {value:'support', text:'Support'}];
<Select id="role" labelText="Select Role" defaultOptionMessage='Select Role'  options={options} onValueChange={(e)=>{}}/>
```
