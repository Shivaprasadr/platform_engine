// Utility to parse font string to style object
export function parseFont(fontString: string): React.CSSProperties {
  const style: React.CSSProperties = {};
  fontString.split(';').forEach((rule) => {
    const [prop, value] = rule.split(':').map(s => s.trim());
    if (prop && value) {
      // Convert CSS property to camelCase
      const camelProp = prop.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      (style as any)[camelProp] = value;
    }
  });
  return style;
}
