let selectedRole = null;

        // 모든 account 요소에 클릭 이벤트 추가
        document.querySelectorAll('.account').forEach(account => {
            account.addEventListener('click', function() {
                document.querySelectorAll('.account').forEach(el => el.classList.remove('selected'));
                this.classList.add('selected');
                selectedRole = this.getAttribute('data-role');
            });
        });

        // 선택 완료 버튼 클릭 시 호출되는 함수
        function completeSelection() {
            if (selectedRole) {
                let url = '';
                switch (selectedRole) {
                    case 'teacher':
                        url = '#';
                        break;
                    case 'student':
                        url = '#';
                        break;
                    case 'admin':
                        url = '#';
                        break;
                }
                window.location.href = url;
            } else {
                alert('사용자를 선택해 주세요.');
            }
        }