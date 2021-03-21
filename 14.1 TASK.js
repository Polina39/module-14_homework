const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml"); 


const listNode = xmlDOM.querySelector ("list"),
      studentNode = listNode.querySelectorAll("student");

let nameNode = [],
    ageNode = [],
    profNode = [],
    langAttr = [];
    
    const result = {
      list: [ ]
    };
    
     for (let i=0; i<studentNode.length; i++) {

      nameNode.push(studentNode[i].querySelector("name"));
      ageNode.push(studentNode[i].querySelector("age"));
      profNode.push(studentNode[i].querySelector("prof"));
      langAttr.push(nameNode[i].getAttribute('lang'));
       
    result.list.push({
    name: nameNode[i].textContent,
    age: Number(ageNode[i].textContent),
    prof: profNode[i].textContent,
    lang: langAttr[i]
  });  
       
    }

console.log(result);