'use client'
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import Link from "next/link";
import Calendar  from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Tooltip} from 'react-tooltip';

const Home = ({}) => {

  //Array of Calendar events

  const EventDates = [
    {title: 'Conference Highlight', date: '2024-04-05', description: 'Event: Conference Highlight'},
    {title: 'Workshop SChedule', date: '2024-04-15', description: 'Event: Workshop Schedule'},
    {title: 'Community Outreach ', date: '2024-04-25', description: 'Event: Community Outreach Program'}
  ];

  return (
    <>
      <div className=" relative flex flex-col justify-start items-center gap-2.5 bg-[#19251D]">
        <div className="flex flex-col items-center justify-start gap-5 p-2 text-white md:gap-16 md:p-20 grow shrink basis-0">
          <div className="flex flex-col items-start justify-start gap-12 p-2 ">
            <div className="flex flex-col items-center justify-start gap-5 ">
              <div className=" text-center text-xl  md:text-[32px] font-semibold  ">
                Events Calendar
              </div>
              <div className=" text-center text-normal  md:text-[22px]   ">
                <p>
                  Stay informed and engaged with our events calendar. Discover
                  upcoming conferences, workshops, and community outreach
                  initiatives. Plan your participation and be part of events
                  that align with your interests and goals
                </p>
              </div>
              <div className="w-full" id="calendar">
                <Calendar
                  plugins={[ dayGridPlugin]}
                  initialView="dayGridMonth"
                  events={EventDates.map(event => ({
                    ...event,
                    description: `Event: ${event.title}`
                  }))} 
                  eventContent={({event}) => (
                    <span date-tip={event.extendedProps.description} data-for="event-tooltip">
                      {event.title}
                    </span>
                  )}
                  height="auto"
                  contentHeight="auto"
                />
              </div>
            </div>
          </div>

          <div className="text-xl text-center font-semibold md:text-[32px]">
            Our Upcoming Events
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="  border border-zinc-200 flex-col   gap-[5px] inline-flex">
              <Image
                src={"/events/tyc3.jpg"}
                alt={""}
                height={400}
                width={400}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "400px",
                }}
              ></Image>
              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Love Visit
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Come and join the TYC as we visit the LITTLE ANGELS CENTER for Orphans and Vulnerable Children, 
                where we shall spend a day filled with love, laughter, and joy. Together, we'll share unforgettable moments with the children, 
                bringing smiles to their faces and warmth to their hearts. Let's make a difference in their lives and create cherished memories that will last a lifetime.
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className="">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/"}
                        className="flex flex-row justify-between w-full"
                      >
                        <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]'>
                          <span>Register</span>
                          <Icons.right/>
                        </Button>

                      </Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  gap-[5px] inline-flex ">
              <Image
                alt={""}
                src={"/events/tyc1.jpg"}
                height={400}
                width={400}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "400px",
                }}
              ></Image>

              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Tree Planting
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                Join us for a day of environmental stewardship as we embark on a tree planting initiative. 
                Together, we'll nurture nature by planting trees, breathing life into our planet, and creating a greener, 
                more sustainable future for generations to come. Let's roll up our sleeves, dig into the soil, 
                and sow the seeds of change. Every tree we plant is a step towards a healthier, more vibrant ecosystem, 
                and with your help, we can make a lasting impact on the world around us.
                </div>
              </div>

              <div className=" gap-4 p-4 ">
                <div className=" gap-4 py-4 pr-2 ">
                  <div className=" ">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/"}
                        className="flex flex-row justify-between w-full"
                      >
                        <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]'>
                          <span>Register</span>
                          <Icons.right/>
                        </Button>

                      </Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  gap-[5px] inline-flex ">
              <Image
                alt={""}
                src={"/images/photo7.jpg"}
                height={400}
                width={400}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "400px",
                }}
              ></Image>

              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Community Outreach
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Stay connected with our community outreach programs. Explore
                  opportunities to contribute to societal well-being and make a
                  positive impact
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" h-12 py-4 pr-2 grow shrink basis-0">
                  <div className="">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/"}
                        className="flex flex-row justify-between w-full"
                      >
                        
                        <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]'>
                          <span>Register</span>
                          <Icons.right/>
                        </Button>

                      </Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="  border border-zinc-200 flex-col  gap-[5px] inline-flex ">
              <Image
                alt={""}
                src={"/images/cardpicture3.png"}
                height={400}
                width={400}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "400px",
                }}
              ></Image>

              <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
                <div className="flex flex-col items-start justify-start gap-1 ">
                  <div className="self-stretch  text-[40px] font-bold  leading-[44px]">
                    Youth Exchange Program
                  </div>
                </div>
                <div className="self-stretch text-2xl font-normal  leading-[33.60px]">
                  Navigate through our resources and empower yourself with the
                  knowledge to shape a brighter future. Whether you&apos;re a
                  participant in our programs or a curious mind seeking valuable
                  insights, TYC Africa Trust is here to support your journey
                </div>
              </div>
              <div className=" gap-4 p-4 ">
                <div className=" h-12 py-4 pr-2 grow shrink basis-0">
                  <div className="">
                    <div className="text-xl font-medium leading-tight tracking-wide underline ">
                      <Link
                        href={"/"}
                        className="flex flex-row justify-between w-full"
                      >
                        
                        <Button className='flex justify-betweenpy-4 px-8 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]'>
                          <span>Register</span>
                          <Icons.right/>
                        </Button>

                      </Link>
                    </div>
                  </div>
                  <div className="relative w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tooltip />
    </>
  );
};

export default Home;
