"use client";

import Carousel from "@/components/ui/Carousel";

import Image from "next/image";
import cotrang from "@/assets/imageVu_Giang/cotrang1.jpg"
import cotrang2 from "@/assets/imageVu_Giang/cotrang2.jpg"
import cotrang3 from "@/assets/imageVu_Giang/cotrang3.jpg"
import anhchinh from "@/assets/imageVu_Giang/anhchinh1.jpg"
import anhchinh2 from "@/assets/imageVu_Giang/anhchinh2.jpg"
import anhchinh3 from "@/assets/imageVu_Giang/anhchinh3.jpg"
import ngoaitroi from "@/assets/imageVu_Giang/ngoaitroi1.jpg"
import ngoaitroi2 from "@/assets/imageVu_Giang/ngoaitroi2.jpg"
import ngoaitroi3 from "@/assets/imageVu_Giang/ngoaitroi3.jpg"
export default function GallerySection() {
  return (
    <section className="bg-white-black pb-5 pt-3" id="gallery">
      <div className="container">
        <div className="border rounded-5 shadow p-3">
          <h2
            className="font-secondary text-center py-2 m-0"
            style={{ fontSize: "2.25rem" }}
          >
            Khoảnh khắc của chúng tôi
          </h2>

          <Carousel
            id="carousel-image-one"
            images={[
              { src: cotrang.src, alt: "Image 1" },
              { src: cotrang2.src, alt: "Image 2" },
              { src: cotrang3.src, alt: "Image 3" },
            ]}

          />

          <Carousel
            id="carousel-image-two"
            images={[
              { src: anhchinh.src, alt: "Image 4" },
              { src: anhchinh2.src, alt: "Image 5" },
              { src: anhchinh3.src, alt: "Image 6" },
            ]}
          />
          <Carousel
            id="carousel-image-three"
            images={[
              { src: ngoaitroi.src, alt: "Image 4" },
              { src: ngoaitroi2.src, alt: "Image 5" },
              { src: ngoaitroi3.src, alt: "Image 6" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}