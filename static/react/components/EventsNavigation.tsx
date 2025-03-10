import React, { FC } from "react"

import { NavLink } from "react-router-dom"

type EventsNavigationProps = {}

const EventsNavigation: FC<EventsNavigationProps> = (props: EventsNavigationProps) => {

    const {} = props

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/shop/events">All Events</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop/events/new">New Event</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default EventsNavigation