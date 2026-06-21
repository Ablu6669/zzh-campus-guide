// 学校选择功能
document.addEventListener('DOMContentLoaded', function() {
    const schoolOptions = document.querySelectorAll('.school-option:not(.disabled)');
    const enterBtn = document.getElementById('enterBtn');
    let selectedSchool = 'cuhksz'; // 默认选择
    
    // 学校选择
    schoolOptions.forEach(option => {
        option.addEventListener('click', function() {
            // 移除所有选中状态
            schoolOptions.forEach(opt => opt.classList.remove('selected'));
            // 添加当前选中状态
            this.classList.add('selected');
            selectedSchool = this.dataset.school;
        });
    });
    
    // 进入校园按钮
    enterBtn.addEventListener('click', function() {
        if (selectedSchool) {
            // 跳转到主页面，并传递学校参数
            window.location.href = `pages/main.html?school=${selectedSchool}`;
        }
    });
});
