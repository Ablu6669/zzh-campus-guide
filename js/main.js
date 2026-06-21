// 获取URL参数
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 页面导航
function navigateTo(page) {
    const school = getQueryParam('school') || 'cuhksz';
    window.location.href = `${page}?school=${school}`;
}

// 返回首页（返回功能卡片页）
function goBack() {
    const school = getQueryParam('school') || 'cuhksz';
    window.location.href = `./main.html?school=${school}`;
}

// 退出登录
function logout() {
    if (confirm('确定要切换学校吗？')) {
        window.location.href = '../index.html';
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    const school = getQueryParam('school');
    
    // 根据学校参数更新页面内容
    if (school === 'cuhksz') {
        document.title = '校园新生指南 - 香港中文大学（深圳）';
        const badge = document.querySelector('.school-badge');
        if (badge) {
            badge.textContent = '香港中文大学（深圳）';
        }
    }
    
    // 这里可以添加更多学校相关的初始化逻辑
});
