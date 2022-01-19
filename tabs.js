document.querySelectorAll('#button_tab').forEach(function(tabsBtn){       
    tabsBtn.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.work_content').forEach(function(tabContent){
            tabContent.classList.remove('tab_contant_active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab_contant_active')

        document.querySelector('.foto_work').style.background = 'url(img/foto_work_' +  path + '.jpg) no-repeat';
    })
})





