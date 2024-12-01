/* عام */
body {
    font-family: 'Arial', sans-serif;
        margin: 0;
            padding: 0;
                background-color: #f4f4f9;
                    color: #333;
                        line-height: 1.6;
                            overflow-x: hidden;
                                scroll-behavior: smooth;
                                }

                                /* التنقل */
                                nav {
                                    position: fixed;
                                        top: 0;
                                            width: 100%;
                                                background: #6200ea;
                                                    color: #fff;
                                                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                                                            z-index: 1000;
                                                            }

                                                            nav ul {
                                                                list-style: none;
                                                                    display: flex;
                                                                        justify-content: center;
                                                                            margin: 0;
                                                                                padding: 10px;
                                                                                }

                                                                                nav ul li {
                                                                                    margin: 0 15px;
                                                                                    }

                                                                                    nav ul li a {
                                                                                        color: #fff;
                                                                                            text-decoration: none;
                                                                                                font-size: 16px;
                                                                                                    transition: color 0.3s;
                                                                                                    }

                                                                                                    nav ul li a:hover {
                                                                                                        color: #ffcc00;
                                                                                                        }

                                                                                                        /* المحتوى */
                                                                                                        .container {
                                                                                                            max-width: 800px;
                                                                                                                margin: 80px auto 20px;
                                                                                                                    padding: 20px;
                                                                                                                        background: #fff;
                                                                                                                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                                                                                                                                border-radius: 8px;
                                                                                                                                    color: #333;
                                                                                                                                    }

                                                                                                                                    /* الأنميشن */
                                                                                                                                    .section {
                                                                                                                                        margin-bottom: 40px;
                                                                                                                                            opacity: 0;
                                                                                                                                                transform: translateY(50px) scale(0.95);
                                                                                                                                                    transition: all 0.8s ease-out;
                                                                                                                                                    }

                                                                                                                                                    .section.visible {
                                                                                                                                                        opacity: 1;
                                                                                                                                                            transform: translateY(0) scale(1);
                                                                                                                                                            }

                                                                                                                                                            h2 {
                                                                                                                                                                border-bottom: 2px solid #6200ea;
                                                                                                                                                                    padding-bottom: 5px;
                                                                                                                                                                        margin-bottom: 10px;
                                                                                                                                                                            color: #333;
                                                                                                                                                                                animation: slide-in 0.8s ease-out;
                                                                                                                                                                                }

                                                                                                                                                                                ul {
                                                                                                                                                                                    list-style-type: square;
                                                                                                                                                                                        padding-left: 20px;
                                                                                                                                                                                        }

                                                                                                                                                                                        /* الفوتر */
                                                                                                                                                                                        footer {
                                                                                                                                                                                            text-align: center;
                                                                                                                                                                                                padding: 10px 0;
                                                                                                                                                                                                    background: #6200ea;
                                                                                                                                                                                                        color: #fff;
                                                                                                                                                                                                            border-radius: 0 0 8px 8px;
                                                                                                                                                                                                            }

                                                                                                                                                                                                            /* Keyframe animation */
                                                                                                                                                                                                            @keyframes slide-in {
                                                                                                                                                                                                                from {
                                                                                                                                                                                                                        transform: translateX(-100%);
                                                                                                                                                                                                                                opacity: 0;
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                        to {
                                                                                                                                                                                                                                                transform: translateX(0);
                                                                                                                                                                                                                                                        opacity: 1;
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                            }