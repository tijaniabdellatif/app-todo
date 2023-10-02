const form = document.querySelector(".form__info");
const input = document.getElementById('todo');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('#main');
const BtnClear = document.querySelector('.clear');

window.addEventListener('DOMContentLoaded',loadContent);
form.addEventListener('submit',handleSubmit);
BtnClear.addEventListener('click',clearBtn);

let editElement;
let editFlag = false;
let editedId = '';




function loadContent() {

    console.log('Loading content')
}

function handleSubmit(e){

    e.preventDefault();
    const inputValue = input.value;
    const todoId = new Date().getTime().toString();

    if(inputValue && !editFlag){

        const element = document.createElement('div');
        element.classList.add('list');
        const IdAttribute = document.createAttribute('data-id');
        IdAttribute.value = todoId;
        element.setAttributeNode(IdAttribute);

        element.innerHTML = `
        <div class="list__item">

        <p class="list__text">${inputValue}</p>
        <div class="list__action">
            <button class="list__button" id="edit">
                <i class="fas fa-edit" class="list__button--edit"></i>
            </button>
            <button class="list__button" id="delete">
                <i class="fas fa-trash" class="list__button--delete"></i>
            </button>
        </div>
        
    </div>
        `;

        const editBtn = document.querySelector('#edit');
        const deleteBtn = document.querySelector('#delete');

        editBtn.addEventListener('click', () => {

            
        })



        section.appendChild(element);

       

          
    }

    else if(inputValue && editFlag){

        
            Swal.fire({

                title: 'Do you want to edit this item',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `No`,
            }).then(result => {


                  if(result.isConfirmed){

                    /**
                     * Edit and save to localStorage
                     */
                  }

                  else {

                      Swal.fire('changes are not saved','','info')
                  }

            })

    }else {

        let timeInterval = 0;


        Swal.fire({

            title: '<h2 style="color:red">Error</h2>',
            html: '<span style="color:#E94703; font-size:25px">You can not send Empty Value</span>',
            timer: 3000,
            timerProgressBar: true,

            didOpen:() => {


                   Swal.showLoading();
                   const buffer = Swal.getHtmlContainer().querySelector('span');

                   timeInterval = setInterval(() => {

                            buffer.textContent = Swal.getTimerLeft() + " seconds"
                   },1300)

            }

              
             
        }).then((result) =>{
            console.log(result)
             if(result.isDismissed === true){

               
                 console.log('I was closed by the timer')
             }
        })
        
        ;
         
    }






   
}

function clearBtn(){



    console.log("clear btn")
}