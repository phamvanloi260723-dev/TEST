"use client";

import { siteConfig } from "@/config/site";
import "./event-section.css";

export default function EventSection() {
    const groomDate = new Date(siteConfig.eventDate || siteConfig.weddingDate);

    // Format Vietnamese date (Groom)
    const groomDay = groomDate.getDate();
    const groomMonth = groomDate.getMonth() + 1;
    const groomYear = groomDate.getFullYear();
    const groomWeekday = new Intl.DateTimeFormat("vi-VN", { weekday: "long" }).format(groomDate);

    const brideDate = new Date(siteConfig.brideEventDate || siteConfig.weddingDate);

    // Format Vietnamese date (Bride)
    const brideDay = brideDate.getDate();
    const brideMonth = brideDate.getMonth() + 1;
    const brideYear = brideDate.getFullYear();
    const brideWeekday = new Intl.DateTimeFormat("vi-VN", { weekday: "long" }).format(brideDate);

    return (
        <section className="bg-light-dark py-4" id="event">
            <div className="container px-3">
                <div className="event-minimal-container" data-aos="fade-up">
                    <div className="event-minimal-card bg-theme-auto shadow-sm">
                        <div className="event-minimal-inner text-center py-5 px-3">

                            <h2 className="minimal-title font-secondary mb-2" data-aos="zoom-in" data-aos-delay="100">
                                Tiệc được tổ chức
                            </h2>


                            <div className="minimal-venue-box my-3" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="minimal-venue font-primary">{siteConfig.venueName}</h3>
                                <div className="minimal-address-wrap mt-2">
                                    <p className="minimal-address font-secondary">{siteConfig.address}</p>

                                </div>
                            </div>

                            <div className="minimal-divider my-4">
                                <span></span>
                                <i className="fa-solid fa-heart px-3 text-accent opacity-50"></i>
                                <span></span>
                            </div>

                            <div className="minimal-datetime row align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="300">
                                <div className="col-auto">
                                    <div className="minimal-time">
                                        <span className="time-num font-number">{siteConfig.eventTime}</span>
                                        <span className="time-unit font-esthetic">GIỜ</span>
                                    </div>
                                </div>
                                <div className="col-auto border-start border-end border-opacity-10 px-4">
                                    <div className="minimal-date">
                                        <span className="weekday font-esthetic text-uppercase">{groomWeekday}</span>
                                        <span className="date-full font-number">
                                            {groomDay} . {groomMonth < 10 ? `0${groomMonth}` : groomMonth} . {groomYear}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="event-actions mt-5 btn-outline-auto"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <a
                                    href={siteConfig.groomMapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn  btn-invitation-sm rounded-pill px-4 border border-2 border-pink-500"
                                >
                                    <i className="fa-solid fa-location-dot me-2 "></i>
                                    Xem Bản Đồ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-3">
                <div className="event-minimal-container" data-aos="fade-up">
                    <div className="event-minimal-card bg-theme-auto shadow-sm">
                        <div className="event-minimal-inner text-center py-5 px-3">

                            <h2 className="minimal-title font-secondary mb-2" data-aos="zoom-in" data-aos-delay="100">
                                Tiệc được tổ chức
                            </h2>


                            <div className="minimal-venue-box my-3" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="minimal-venue font-primary">{siteConfig.brideVenueName}</h3>
                                <div className="minimal-address-wrap mt-2">
                                    <p className="minimal-address font-secondary">{siteConfig.brideAddress}</p>

                                </div>
                            </div>

                            <div className="minimal-divider my-4">
                                <span></span>
                                <i className="fa-solid fa-heart px-3 text-accent opacity-50"></i>
                                <span></span>
                            </div>

                            <div className="minimal-datetime row align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="300">
                                <div className="col-auto">
                                    <div className="minimal-time">
                                        <span className="time-num font-number">{siteConfig.brideEventTime}</span>
                                        <span className="time-unit font-esthetic">GIỜ</span>
                                    </div>
                                </div>
                                <div className="col-auto border-start border-end border-opacity-10 px-4">
                                    <div className="minimal-date">
                                        <span className="weekday font-esthetic text-uppercase">{brideWeekday}</span>
                                        <span className="date-full font-number">
                                            {brideDay} . {brideMonth < 10 ? `0${brideMonth}` : brideMonth} . {brideYear}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="event-actions mt-5 btn-outline-auto"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <a
                                    href={siteConfig.brideMapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn  btn-invitation-sm rounded-pill px-4 border border-2 border-pink-500"
                                >
                                    <i className="fa-solid fa-location-dot me-2 "></i>
                                    Xem Bản Đồ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
