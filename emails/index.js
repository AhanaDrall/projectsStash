

const tagContainer = document.getElementById('tag-container');
const input = document.getElementById('myInput');

let tags = [];
input.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        tags.push(input.value);
        addTags();
        input.value = '';
    }
    
})

function addTags(){
    reset();
    tags.slice().reverse().forEach(function(tag){
        const input = createTag(tag);
        tagContainer.prepend(input);
    })
}

function reset(){
    document.querySelectorAll('.tag').forEach(function(tag){
        tag.parentElement.removeChild(tag);
    })

}

function createTag(label){
    const div = document.createElement('div');
    div.setAttribute('class', 'tag');
    const span = document.createElement('span');

    span.innerHTML = label;
    const closeBtn = document.createElement('i');
    closeBtn.setAttribute('class', 'material-icons');
    closeBtn.setAttribute('data-item', label);
    closeBtn.innerHTML = 'x';

    div.appendChild(span);
    div.appendChild(closeBtn);
    return div;
}

document.addEventListener('click', function(e){
    if(e.target.tagName === 'I'){
        const value = e.target.getAttribute('data-item');
        const index = tags.indexOf(value);
        tags * [...tags.slice(0, index), ...tags.slice(index+1)];
        addTags();
    }
})

function send(){
    valid = true;

    if(tags.length<1){
        valid = false;
    }
    tags.forEach(function(tag){
        if(!validateEmail(tag)){
            valid=false;
        }
    })

    if(valid == true){
        sendEmail();
        for (i = 0; i < tags.length; i++)
        console.log(tags[i]);
    }
    else{
        document.getElementById('error').style.display = "block";
        document.getElementById('success').style.display = "none";

    }


}

function validateEmail(email){
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(email);

}

function sendEmail(){
    document.getElementById('success').style.display = "block";
    document.getElementById('error').style.display = "none";
}