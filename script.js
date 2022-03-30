const INVALID_VAL = -2;
const EMPTY_VAL = -1;
const percent_array = [5, 10, 15, 25, 50];
let percentage = EMPTY_VAL;

document.getElementById('custom-input').addEventListener('input', event => {
    var regex=/^[0-9]+$/;
    const num = event.target.value;
    if(event.target.value.length == 0)
    {
        percentage = EMPTY_VAL;
    }
    else if(!num.match(regex))
    {
        document.getElementById('tip-error').innerHTML = 'Invalid value';
        percentage = INVALID_VAL;
    }
    else
    {
        document.getElementById('tip-error').innerHTML = '';
        percentage = event.target.value;
    }
})

document.getElementById('custom-input').addEventListener('click', event => {
    percentage = EMPTY_VAL;
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = 'hsl(183, 100%, 15%)';
        item.style.color = 'white';
    })
})

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', event => {
        //handle click
        const collection = document.getElementsByClassName("grid-item");

        for(let i = 0; i < collection.length; i++)
        {
            if(collection[i] == item)
            {
                item.style.backgroundColor = 'hsl(172, 67%, 45%)';
                item.style.color = 'hsl(183, 100%, 15%)';
                percentage = percent_array[i];
            }
            else
            {
                collection[i].style.backgroundColor = 'hsl(183, 100%, 15%)';
                collection[i].style.color = 'white';
            }
        }
    })
})

const btn = document.getElementById('reset')
btn.addEventListener('click', event => {
        //handle click
        btn.style.backgroundColor = 'hsl(186, 14%, 43%)';
        btn.style.color = 'white';
        percentage = EMPTY_VAL;
        location.reload()
})

function helper(num, id, string, all_fill_out)
{
    if(num == 0)
    {
        document.getElementById(id).innerHTML = string;
        return false;
    }
    else
    {
        var regex=/^[0-9]+$/;
        const list = 
        {
            'bill-error':'bill-input',
            'pp-error':'num-people',
        }

        if(!document.getElementById(list[id]).value.match(regex))
        {
            document.getElementById(id).innerHTML = 'Invalid value';
            return false;
        }
        else
        {
            document.getElementById(id).innerHTML = '';
            return true;
        }
    }
}

const cal_btn = document.getElementById('calculate')
cal_btn.addEventListener('click', event => {
    let all_fill_out = true;
    
    all_fill_out &= helper(document.getElementById('bill-input').value.length, 'bill-error', 'Insert value');
    all_fill_out &= helper(document.getElementById('num-people').value, 'pp-error', 'Insert value');
    if(percentage == EMPTY_VAL)
    {
        document.getElementById('tip-error').innerHTML = 'Select tip %';
        all_fill_out = false;
    }
    else if(percentage == INVALID_VAL)
    {
        document.getElementById('tip-error').innerHTML = 'Invalid value';
        all_fill_out = false;
    }

    if(all_fill_out)
    {
        //handle click
        document.getElementById('bill-error').innerHTML = '';
        document.getElementById('pp-error').innerHTML = '';
        document.getElementById('tip-error').innerHTML = '';
        const bill = document.getElementById('bill-input').value;
        const num_people = document.getElementById('num-people').value;
        const tip_amount = (bill*(percentage/100));
        const tip_per_person = tip_amount/num_people;
        const total = (bill*1) + tip_amount;
        const total_per_person = total/num_people;
        document.getElementById('tip-amount').innerHTML = `$${tip_per_person.toFixed(2)}`;
        document.getElementById('total-per-person').innerHTML = `$${total_per_person.toFixed(2)}`;
    }
})