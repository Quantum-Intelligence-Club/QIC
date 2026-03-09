"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./scroll-gallery.css";

interface GalleryItemData {
  name: string;
  year: number | string;
  img: string;
}

interface ScrollGalleryProps {
  items: GalleryItemData[];
}

const IMAGES_PER_ROW = 9;
const ROWS_COUNT = 10;

export function ScrollGallery({ items }: ScrollGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rowStartWidth = useRef(125);
  const rowEndWidth = useRef(500);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rows = rowsRef.current.filter((row): row is HTMLDivElement => row !== null);
    if (rows.length === 0) return;

    const isMobile = window.innerWidth < 1000;
    rowStartWidth.current = isMobile ? 250 : 125;
    rowEndWidth.current = isMobile ? 750 : 500;

    const firstRow = rows[0];
    const originalWidth = firstRow.style.width;
    firstRow.style.width = `${rowEndWidth.current}%`;
    const expandedRowHeight = firstRow.offsetHeight;
    firstRow.style.width = originalWidth;

    const sectionStyle = getComputedStyle(section);
    const sectionGap = parseFloat(sectionStyle.gap) || 0;
    const sectionPaddingLeft = parseFloat(sectionStyle.paddingLeft) || 0;
    const sectionPaddingRight = parseFloat(sectionStyle.paddingRight) || 0;
    const sectionPaddingTop = parseFloat(sectionStyle.paddingTop) || 0;
    const sectionPaddingBottom = parseFloat(sectionStyle.paddingBottom) || 0;

    const expandedSectionHeight =
      expandedRowHeight * rows.length +
      sectionGap * (rows.length - 1) +
      sectionPaddingTop + sectionPaddingBottom;

    section.style.height = `${expandedSectionHeight}px`;

    function onScrollUpdate() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      rows.forEach((row) => {
        const rect = row.getBoundingClientRect();
        const rowTop = rect.top + scrollY;
        const rowBottom = rowTop + rect.height;

        const scrollStart = rowTop - viewportHeight;
        const scrollEnd = rowBottom;

        let progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
        progress = Math.max(0, Math.min(1, progress));

        const width =
          rowStartWidth.current +
          (rowEndWidth.current - rowStartWidth.current) * progress;
        row.style.width = `${width}%`;
      });
    }

    gsap.ticker.add(onScrollUpdate);

    const handleResize = () => {
      const isMobile = window.innerWidth < 1000;
      rowStartWidth.current = isMobile ? 250 : 125;
      rowEndWidth.current = isMobile ? 750 : 500;

      const currentFirstRow = rows[0];
      const prevW = currentFirstRow.style.width;
      currentFirstRow.style.width = `${rowEndWidth.current}%`;
      const newRowHeight = currentFirstRow.offsetHeight;
      currentFirstRow.style.width = prevW;

      const newSectionHeight =
        newRowHeight * rows.length +
        sectionGap * (rows.length - 1) +
        sectionPaddingTop + sectionPaddingBottom;

      section.style.height = `${newSectionHeight}px`;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(onScrollUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prepare rows data
  const rowsData = [];
  let currentImgIndex = 0;

  for (let r = 0; r < ROWS_COUNT; r++) {
    const rowItems = [];
    for (let c = 0; c < IMAGES_PER_ROW; c++) {
      rowItems.push(items[currentImgIndex % items.length]);
      currentImgIndex++;
    }
    rowsData.push(rowItems);
  }

  return (
    <section ref={sectionRef} className="projects">
      {rowsData.map((rowItems, rowIndex) => (
        <div
          key={rowIndex}
          className="projects-row"
          ref={(el) => {
            rowsRef.current[rowIndex] = el;
          }}
        >
          {rowItems.map((item, colIndex) => (
            <div key={colIndex} className="project">
              <div className="project-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="project-info">
                <p>{item.name}</p>
                <p>{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
