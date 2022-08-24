import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div id="side_bar" className="side_bar fl_l ">
            <div id="side_bar_inner" className="side_bar_inner">
                <nav className="side_bar_nav">
                    <ol className="side_bar_ol">
                        <li id="l_pr">
                            <NavLink to="/profile"
                                     className="left_row">
                                <div className="LeftMenu__icon">
                                    <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.84 15.63a6.97 6.97 0 008.32 0 8.2 8.2 0 00-8.32 0zM4.7 14.57a7 7 0 1110.6 0 9.7 9.7 0 00-10.6 0zM10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6z"
                                            fill="currentColor"/>
                                    </svg>
                                </div>
                                <span className="left_label inl_bl">Моя страница</span>
                                <span className="left_count_wrap fl_r left_void"><span
                                    className="inl_bl left_count_sign">0</span></span>
                            </NavLink>
                            <div className="left_settings">
                                <div className="left_settings_inner"></div>
                            </div>
                        </li>
                        <li id="l_nwsf" className="">
                            <NavLink to="/"
                                     className="left_row">
                                <div className="LeftMenu__icon">
                                    <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.84 2H8.16c-.93 0-1.67 0-2.26.05-.62.05-1.15.15-1.63.4a4.15 4.15 0 00-1.82 1.82 4.26 4.26 0 00-.4 1.63C2 6.5 2 7.23 2 8.16v3.68c0 .93 0 1.67.05 2.26.05.62.15 1.15.4 1.63.4.78 1.04 1.42 1.82 1.82.48.25 1.01.35 1.63.4.6.05 1.33.05 2.26.05h3.68c.93 0 1.67 0 2.26-.05a4.26 4.26 0 001.63-.4 4.15 4.15 0 001.82-1.82c.25-.48.35-1.01.4-1.63.05-.6.05-1.33.05-2.26V8.16c0-.93 0-1.67-.05-2.26a4.26 4.26 0 00-.4-1.63 4.15 4.15 0 00-1.82-1.82 4.26 4.26 0 00-1.63-.4C13.5 2 12.77 2 11.84 2zm-6.9 1.79c.25-.12.56-.2 1.08-.25.53-.04 1.2-.04 2.17-.04h3.62c.96 0 1.64 0 2.17.04.52.05.83.13 1.07.25.5.25.9.66 1.16 1.16.12.24.2.55.25 1.07l.02.48H3.52l.02-.48c.05-.52.13-.83.25-1.07.25-.5.66-.9 1.16-1.16zM3.5 8v3.81c0 .96 0 1.64.04 2.17.05.52.13.83.25 1.07.25.5.66.9 1.16 1.16.24.12.55.2 1.07.25.53.04 1.2.04 2.17.04h3.62c.96 0 1.64 0 2.17-.04a2.8 2.8 0 001.07-.25c.5-.25.9-.66 1.16-1.16.12-.24.2-.55.25-1.07.04-.53.04-1.2.04-2.17V8.19 8z"
                                            fill="currentColor"/>
                                    </svg>
                                </div>
                                <span className="left_label inl_bl">Новости</span>
                                <span className="left_count_wrap fl_r left_void"><span
                                    className="inl_bl left_count_sign">0</span></span>
                            </NavLink>
                            <div className="left_settings">
                                <div className="left_settings_inner"></div>
                            </div>
                        </li>
                        <li id="l_msg" className="">
                            <NavLink to="/dialogs"
                                     className="left_row">
                                <div className="LeftMenu__icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="message_outline_20__Page-2" stroke="none"
                                           fill="none">
                                            <g id="message_outline_20__message_outline_20">
                                                <path id="message_outline_20__Shape" opacity=".4"
                                                      d="M0 0h20v20H0z"/>
                                                <path
                                                    d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22zM3.24 18.5a1.2 1.2 0 01-1.1-1.77A10.77 10.77 0 003.26 14 7 7 0 012 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4z"
                                                    id="message_outline_20__Icon-Color" fill="currentColor"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="left_label inl_bl">Мессенджер</span>
                                <span className="left_count_wrap fl_r left_void"><span
                                    className="inl_bl left_count_sign">0</span></span>
                            </NavLink>
                            <div className="left_settings">
                                <div className="left_settings_inner"></div>
                            </div>
                        </li>
                        <li id="l_fr" className="">
                            <NavLink to="/"
                                     className="left_row">
                                <div className="LeftMenu__icon">
                                    <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g fill="currentColor">
                                            <g>
                                                <path
                                                    d="M6.25 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM2.69 11.57c.96-.55 2.22-.82 3.56-.82s2.6.27 3.56.82c.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54H3.5c-.61 0-1.24-.15-1.72-.54-.5-.4-.78-1-.78-1.71 0-1.21.71-2.12 1.69-2.68zm.75 1.3c-.65.37-.94.84-.94 1.38 0 .3.1.44.22.54.14.11.4.21.78.21H9c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38-.66-.39-1.65-.62-2.81-.62s-2.15.23-2.81.62zM13.75 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"/>
                                            </g>
                                            <path
                                                d="M13.75 12.25c-.23 0-.45.01-.68.03a.75.75 0 11-.14-1.49c.27-.03.54-.04.82-.04 1.34 0 2.6.27 3.56.82.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54h-3a.75.75 0 010-1.5h3c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38a5.77 5.77 0 00-2.81-.62z"/>
                                        </g>
                                    </svg>
                                </div>
                                <span className="left_label inl_bl">Друзья</span>
                                <object type="internal/link"><a href="src/Components/Sidebar"
                                                                className="left_count_wrap fl_r left_void left_count_wrap_hovered"><span
                                    className="inl_bl left_count_sign">0</span></a></object>
                            </NavLink>
                            <div className="left_settings">
                                <div className="left_settings_inner"></div>
                            </div>
                        </li>
                        <li id="l_gr" className="">
                            <NavLink to=""
                                     className="left_row">
                                <div className="LeftMenu__icon">
                                    <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 7.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM7.25 6.5a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zm-.5 7.25c0-.42.23-.83.8-1.17A4.81 4.81 0 0110 12c1.03 0 1.88.23 2.45.58.57.34.8.75.8 1.17 0 .3-.1.44-.22.54-.14.11-.4.21-.78.21h-4.5c-.39 0-.64-.1-.78-.21-.12-.1-.22-.25-.22-.54zM10 10.5c-1.22 0-2.37.27-3.23.8-.88.53-1.52 1.37-1.52 2.45 0 .7.28 1.3.78 1.71.48.39 1.1.54 1.72.54h4.5c.61 0 1.24-.15 1.72-.54.5-.4.78-1 .78-1.71 0-1.08-.64-1.92-1.52-2.45-.86-.53-2-.8-3.23-.8zm4-5.59c.06-.4.44-.7.85-.64a2.5 2.5 0 01-.35 4.98.75.75 0 010-1.5 1 1 0 00.14-1.99.75.75 0 01-.63-.85zM15.76 10a.75.75 0 000 1.5c1.16 0 1.75.67 1.75 1.25 0 .22-.07.41-.19.55-.1.12-.24.2-.46.2a.75.75 0 000 1.5c1.43 0 2.15-1.21 2.15-2.25 0-1.71-1.6-2.75-3.25-2.75zM5 10.75a.75.75 0 00-.75-.75C2.61 10 1 11.04 1 12.75 1 13.79 1.72 15 3.15 15a.75.75 0 000-1.5.57.57 0 01-.47-.2.86.86 0 01-.18-.55c0-.58.6-1.25 1.75-1.25.41 0 .75-.34.75-.75zm.14-6.47a.75.75 0 01.22 1.48 1 1 0 00.14 1.99.75.75 0 110 1.5 2.5 2.5 0 01-.36-4.97z"
                                            fill="currentColor"/>
                                    </svg>
                                </div>
                                <span className="left_label inl_bl">Сообщества</span>
                                <span className="left_count_wrap fl_r left_void"><span
                                    className="inl_bl left_count_sign">0</span></span>
                            </NavLink>
                            <div className="left_settings">
                                <div className="left_settings_inner"></div>
                            </div>
                        </li>
                        <li id="l_ph" className="">
                            <NavLink to=""
                                     className="left_row">
                                <div className="LeftMenu__icon">
                                    <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.84 16.44c.76.06 1.74.06 3.16.06 1.42 0 2.4 0 3.16-.06a3.75 3.75 0 001.43-.32 3.5 3.5 0 001.53-1.53c.15-.29.26-.69.32-1.43l.03-.63-1.3-1.3c-.3-.3-.5-.5-.67-.64a.86.86 0 00-.27-.18.75.75 0 00-.46 0 .86.86 0 00-.27.18c-.16.13-.36.33-.67.64l-2.3 2.3a.75.75 0 01-1.06 0l-.3-.3c-.3-.3-.5-.5-.67-.64a.86.86 0 00-.27-.18.75.75 0 00-.46 0 .86.86 0 00-.27.18c-.16.13-.36.33-.67.64L4.56 15.5c.25.24.53.45.85.6.29.16.69.27 1.43.33zm9.39-6.27l.27.27V10c0-1.42 0-2.4-.06-3.16a3.75 3.75 0 00-.32-1.43 3.5 3.5 0 00-1.53-1.53 3.75 3.75 0 00-1.43-.32A43.2 43.2 0 0010 3.5c-1.42 0-2.4 0-3.16.06-.74.06-1.14.17-1.43.32a3.5 3.5 0 00-1.53 1.53c-.15.29-.26.69-.32 1.43A43.2 43.2 0 003.5 10c0 1.42 0 2.4.06 3.16.04.47.1.8.17 1.05l2.04-2.04.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.16.14.34.3.53.5l1.77-1.77.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7zM2.54 4.73C2 5.8 2 7.2 2 10c0 2.8 0 4.2.54 5.27a5 5 0 002.19 2.19C5.8 18 7.2 18 10 18c2.8 0 4.2 0 5.27-.54a5 5 0 002.19-2.19C18 14.2 18 12.8 18 10c0-2.8 0-4.2-.55-5.27a5 5 0 00-2.18-2.19C14.2 2 12.8 2 10 2c-2.8 0-4.2 0-5.27.54a5 5 0 00-2.19 2.19zM7.25 6a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                                            fill="currentColor"/>
                                    </svg>
                                </div>
                                <span className="left_label inl_bl">Фотографии</span>
                                <span className="left_count_wrap fl_r left_void"><span
                                    className="inl_bl left_count_sign">0</span></span>
                            </NavLink>
                            <div className="left_settings">
                                <div className="left_settings_inner"></div>
                            </div>
                        </li>
                        <div className="more_div"></div>
                    </ol>
                </nav>
                <div id="ads_left" className="ads_left_empty"></div>
                <div className="left_menu_nav_wrap">
                    <a className="left_menu_nav" href="src/Components/Sidebar">Блог</a>
                    <a className="left_menu_nav" href="src/Components/Sidebar">Разработчикам</a>

                </div>
            </div>
        </div>
    );
}
export default Sidebar;