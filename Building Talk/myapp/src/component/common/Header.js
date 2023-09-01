// Header.js
import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="header_box">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">logo</a></li>
                    {/* 로그인,로그아웃,회원가입 구간 */}
                    <li>
                        <a>회원가입</a>
                        <a>로그인</a>
                        <a>로그아웃</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;