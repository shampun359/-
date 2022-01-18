document.querySelectorAll('#button_tab').forEach(function(tabsBtn){       
    tabsBtn.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path
        console.log(path);

        document.querySelectorAll('.work_content').forEach(function(tabContent){
            tabContent.classList.remove('tab_contant_active')
            console.log('Класс  удалён');
        })
        
        document.querySelector('[data-target="${path}"]')//.classList.add('.tab_contant_active')
        console.log('Класс  добавлен');
    })
})


