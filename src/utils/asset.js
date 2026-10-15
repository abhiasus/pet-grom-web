const files = import.meta.glob("../assets/images/*.{jpg,jpeg,png,svg,webp}", {
  eager: true,
  import: "default",
});

export default function asset(name) {
  return files[`../assets/images/${name}`];
}